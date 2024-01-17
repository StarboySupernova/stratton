struct Home: View {
    @State private var index=0
    var body: some View {
        ScrollView(.vertical, showsIndicators: false) {
            VStack
            {
                HStack
                {
                    Button(action: {}) {
                    Image("menu")
                    .renderingMode(.template)
                    .foregroundColor(.white)
                    }
                    
                    Spacer()

                    Button(action: {}) {
                    Image("search")
                    .renderingMode(.template)
                    .foregroundColor(.white)
                    }
                }
                .padding()

                HStack
                {
                    Text("Trending")
                    .font(.system(size: 40,weight: .bold, design: .rounded)))
                    .foregroundColor(.white)

                    Spacer(minLength: 0)

                    Button(action: {}) {
                        Image("dots")
                        .renderingMode(.template)
                        .foregroundColor(.white)
                        .rotationEffect(.init(degrees: 90))


                    }
                }
                .padding(.horizontal)

                HStack
                {
                    
                }

                Spacer()
            }
        }
        .background(
            LinearGradient(gradient: .init(colors: [Color("top"), Color("bottom")]),startPoint: .top, endPoint: .bottom)
            .edgesIgnoringSafeArea(.all)
        )
    }
}