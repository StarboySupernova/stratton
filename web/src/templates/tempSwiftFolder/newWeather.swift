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

