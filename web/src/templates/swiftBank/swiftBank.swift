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

    var body: some View {
        ScrollView(.vertical, showsIndicators: false) {
            VStack(spacing: 10) {
                ProfileCard()
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