struct Card: Identifiable, Hashable {
    var id: UUID = .init()
    var cardName: String
    var cardColor: Color
    var cardBalance: String
    var isFirstBlankCard: Bool = false
    var expenses: [Expenses] = []
}

struct Expense: Identifiable, Hashable, Equatable {
    var id = UUID().uuidString
    var amountSpent: String
    var product: String
    var productIcon: String
    var spendType: String
}

var sampleCards: [Card] = //[get from GPT ]
//the first is the card to be expanded, so it has no data

struct Home: View {
    var proxy: ScrollViewProxy
    var size: CGSize
    var safeArea: EdgeInsets
    /// View Properties
    @State private var activePage: Int = 1
    @State private var myCards: [Card]= sampleCards
    /// Page Offset
    @State private var offset: CGFloat= 0

    var body: some View {
        ScrollView(.vertical, showsIndicators: false) {
            VStack(spacing: 10) {
                ProfileCard()

                ///Indicator
                Capsule()
                .fill(.gray.opacity(0.2))
                .frame(width:50, height:5)
                .padding(.vertical, 5)
                
                ///Page Tab View Height Based on Screen Height
                let pageHeight = size.height * 0.65
                ///PageTab View
                //To Keep track of minY
                GeometryReader {
                    let geometry = $0.frame(in: .global)

                    TabView(selection: $activePage) {
                        ForEach(myCards) { card in
                            ZStack
                            {
                                if card.isFirstBlankCard {
                                    Rectangle() 
                                    .fill(.clear) 
                                } else  {
                                    /// Card View
                                    CardView(card: card)
                                }
                            }
                            .frame(width: geometry.width - 60)
                            ///Page Tag (Index)
                            .tag(index(card))
                            .offsetX(activePage == index(card)) { rect in
                                //Calculating Entire Page Offset
                                let minX = rect.minX
                                let pageOffset = minX - (size.width * CGFloat(index(card)))
                                offset = pageOffset
                            }
                        }
                    }
                    .tabViewStyle(.page(indexDisplayMode: .never))
                    .background(
                        RoundedRectangle(cornerRadius:40, style: .continuous)
                        .fill(Color("ExpandBG").gradient)
                        .frame(height: pageHeight + fullScreenHeight(size))
                        //Expanding to Full Screen, Based on the Progress
                        .frame(width:geometry.width - (60 * reverseProgress(size)), height:pageHeight)
                        /// Making it a little visible at Idle
                        .offset(x:-15 * reverseProgress(size))
                        .scaleEffect(0.95 + (0.05 * progress(size)), anchor: .leading)
                        /// Moving along side with the second card
                        .offset(x: (offset + size.width) < 0 ? (offset + size.width) : 0)
                    )
                }
                .frame(height: pageHeight)
            }
            .padding(.top, safeArea.top + 15)
            .padding(.bottom, safeArea.bottom + 15)
        }
    }

    ///Profile Card View
    @ViewBuilder func ProfileCard () -> some View {
        HStack(alignment: .center, spacing: 4){
            Text("Hello")
            .font(.title)

            Text("JUstine")
            .font(.title)
            .fontWeight(.bold)

            Spacer(minLength: 0)

            Image("Pic")
            .resizable()
            .aspectRatio(contentMode: .fill)
            .frame(width:55, height:55)
            .clipShape(Circle())
        }
        .padding(.horizontal, 25)
        .padding(.vertical, 35)
        .background(
            RoundedRectangle(cornerRadius:35, style: .continuous)
            .fill(Color("Profile"))
        )
        .padding(.horizontal, 30)
        
    }

    ///Returns Index for Given Card
    func index(_ of: Card) -> Int {
        return myCards.firstIndex(of: of) ?? 0
    }

    /// Converts Offset Into Progress
    /// (0 - 1)
    func progress(_ size: CGSize) -> CGFloat {
        let pageOffset = offset + size.width
        let progress = pageOffset / size.width

        return min(progress, 1)
    }

    //Reverse Progress(1 - 0)
    func reverseProgress(_ size: CGSize) -> CGFloat {
        let progress = 1  - progress(size)
        return max(progress, 0)
    }
}

struct ContentView: View {
    var body: some View {
        GeometryReader {
            let size = $0.size
            let safeArea = $0.safeAreaInsets
            ScrollViewReader { proxy in
             Home(proxy: proxy, size: size, safeArea: safeArea)
            }
            .preferredColorScheme(.light)
            .ignoresSafeArea()
        }
    }
}

///Card View
struct CardView: View {
    var card: Card

    var body: some View {
        GeometryReader {
            let size = $0.size

            VStack(spacing: 0)
            {
                 Rectangle()
                 .fill(card.cardColor.gradient)
                 ///Card Details
                 .overlay(alignment: .top) {
                    VStack {
                        HStack {
                            Image("Sim")
                            .resizable()
                            .aspectRatio(contentMode: .fit)
                            .frame(width:65, height:65)

                            Spacer(minLength: 0)

                            Image(systemName: "wave.3.right")
                            .font(.largeTitle.bold())
                        }

                        Spacer(minLength: 0)

                        Text(card.cardBalance)
                        .font(.largeTitle.bold())
                        .frame(maxWidth: .infinity, alignment: .leading)

                    }
                    .padding(30)
                 }

                 Rectangle()
                    .fill(.black)
                    .frame(height: size.height / 3)
                    ///Card Details
                    .overlay {
                        VStack {
                            Text(card.cardName)
                            .font(.title)
                            .frame(maxWidth: .infinity, alignment: .leading)

                            Spacer(minLength: 0)

                            HStack {
                                Text("Debit Card")
                                .font(.callout)

                                Spacer(minLength: 0)

                                Image("Visa")
                                .resizable()
                                .renderingMode(.template) 
                                .aspectRatio(contentMode: .fit) 
                                .frame(width: 60)
                            }
                        }
                        .foregroundColor(.white)
                        .padding(25) 
                    }
            }
            .clipShape(RoundedRectangle(cornerRadius:40, style: .continuous))

        }
    }
    
}

//Offset Preference Key

struct OffsetKey: PreferenceKey {
 static var defaultValue: CGRect = .zero  

 static func reduce(value: inout CGRect, nextValue: () -> CGRect) {
    value = nextValue()
 }
    
}

extension View {
//Offset View Modifier
@ViewBuilder
func offsetX(_ addObserver: Bool, completion: @escaping (CGRect) -> ()) -> some View {
    self
    .frame(maxWidth: .infinity)
    .overlay {
        if addObserver {
            GeometryReader {
                let rect = $0.frame(in: .global)

                Color.clear
                .preference(key: OffsetKey.self, value: rect)
                .onPreferenceChange(OffsetKey.self, perform: completion)
            }
        }
    }
}
    
}