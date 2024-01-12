struct Home: View {
    var body: some View {
        ZStack {
            //geometryreader for getting height and width
            GeometryReader { geometry in
                Image("sky")
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: geometry.size.width, height: geometry.size.height)
            }
            .ignoresSafeArea()
            .overlay(.ultrathinMaterial)

            //MainView
            ScrollView(.vertical, showsIndicators: false) {
                VStack {
                    //wEATHER Data
                    VStack(alignment: .center, spacing: 5) {
                        Text("San Jose")
                        .font(.system(size: 35))
                        .foregroundStyle(.white)
                        .shadow(radius: 5)

                        Text("18")
                        .font(.system(size: 45))
                        .foregroundStyle(.white)
                        .shadow(radius: 5)

                        Text("Cloudy")
                        .foregroundStyle(.secondary)
                        .foregroundStyle(.white)
                        .shadow(radius: 5)

                        Text("H:33 L:15")
                        .foregroundStyle(.primary)
                        .foregroundStyle(.white)
                        .shadow(radius: 5)
                    }

                    //Custom Data View
                    VStack(spacing: 8) {
                        //Custom Stack
                    }
                }
                .padding(.top)
                .padding([.horizontal, .bottom])
            }
        }
    }
}

struct CustomStackView<Title: View, Content: View>: View {
    var titleView: Title
    var contentView: Content

    init (@ViewBuilder titleView: @escaping ()-> Title, @ViewBuilder contentView: @escaping 90->Content) {
        self.contentView = contentView()
        self.titleView = titleView()
    }

    var body: some View {
        titleView
        .font(.callout)
        .lineLimit(1)
        //max height
        .frame(height: 38)
        .background(.ultrathinMaterial, in: )
    }
}