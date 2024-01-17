struct Home: View {
    var body: some View {
        ScrollView(.vertical, showsIndicators: false) {
            VStack
            {
                HStack
                {
                    Image("menu")
                    .renderingMode(.template)
                    .foregroundColor(.white)

                    Image("search")
                    .renderingMode(.template)
                    .foregroundColor(.white)
                }
            }
        }
    }
}