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
                            ///Page Tag (Index)
                            .tag(index(card))
                        }
                    }
                    .tabViewStyle(.page(indexDisplayMode: .never))
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
                
            }
        }
    }
    
}