struct Home: View {
    @State private var index=0
    @State private var stories: [Story]= //get from GPT
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
                 Text("Animated")
                 .font(.caption) 
                 .foregroundColor(index == 0 ? .white : Color("Color1").opacity(0.85))
                 .fontWeight(.bold) 
                 .padding(.vertical, 6)
                 .padding(.horizontal, 20)
                 .background(Color("Color").opacity(index == 0 ? 1 : 0))
                 .clipShape(Capsule()) 
                 .onTapGesture {
                    index = 0
                 }

                 Text("25+ Series")
                 .font(.caption) 
                 .foregroundColor(index == 1 ? .white : Color("Color1").opacity(0.85))
                 .fontWeight(.bold) 
                 .padding(.vertical, 6)
                 .padding(.horizontal, 20)
                 .background(Color("Color").opacity(index == 0 ? 1 : 0))
                 .clipShape(Capsule()) 
                 .onTapGesture {
                    index = 1
                 }

                 Spacer()
                }
                .padding(.horizontal)
                .padding(.top, 10)

                //Card View
                ZStack
                {
                    //ZStack will overlap views so last will become first
                    ForEach(stories.reversed()) { story in
                        Image(story.image)
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                        //dynamic frame
                        .frame(width:calculateWidth(), height:400)
                        .cornerRadius(15)
                    }
                }

                Spacer()
            }
        }
        .background(
            LinearGradient(gradient: .init(colors: [Color("top"), Color("bottom")]),startPoint: .top, endPoint: .bottom)
            .edgesIgnoringSafeArea(.all)
        )
    }

    func calculateWidth() -> CGFloat {
        let screen = UIScreen.main.bounds.width - 30

        //showing first 3 cards. all the others will be hidden
        let width = screen - (2 * 30)

        return width
    }
}

struct Story: Identifiable {
    var id: Int
    var image: String
    var offset: CGFloat
    var title: String
}