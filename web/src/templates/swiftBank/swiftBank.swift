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
    var body: some View {
        ScrollView(.vertical, showsIndicators: false) {
            VStack(spacing: 10) {

            }
        }
    }
}

struct ContentView: View {
    var body: some View {
        GeometryReader {
            //ScrollViewReader for scrolling ScrollView
            ScrollViewReader { proxy in
             Home(proxy: proxy)
            }
            .preferredColorScheme(.light)
        }
    }
}