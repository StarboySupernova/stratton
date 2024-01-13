struct Home: View {
    @State var offset: CGFloat = 0  
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
                        CustomStackView {
                            //Label here
                            Label {
                                Text("Hourly Forecast")
                            } icon: {
                                Image(systemName: "clock")
                            }
                        } contentView: {
                            //Content...
                            ScrollView(.horizontal, showsIndicators: false) {
                                HStack(spacing: 15) {
                                    ForecastView(time:"12 PM", celsius: 94, image: "sun.min")

                                    ForecastView(time:"12 PM", celsius: 94, image: "sun.min")

                                    ForecastView(time:"12 PM", celsius: 94, image: "sun.min")

                                    ForecastView(time:"12 PM", celsius: 94, image: "sun.min")

                                    ForecastView(time:"12 PM", celsius: 94, image: "sun.min")
                                }
                            }
                        }
                    }
                }
                .padding(.top)
                .padding([.horizontal, .bottom])
                // getting offset....
                .overlay(
                    //using GeometryReader
                    GeometryReader { geometry -> Color in

                        let minY = geometry.frame(in: .global).minY
                        DispatchQueue.main.async {
                            self.offset = minY
                        }
                        return Color.clear
                    }
                )
            }
        }
    }
}

struct ForecastView {
    var time: String
    var celsius: CGFloat
    var image: String

    var body: some View {
        VStack(spacing: 15) {
                                        Text(time)
                                        .font(.callout.bold())
                                        .foregroundStyle(.white)

                                        Image(systemName: image)
                                        .font(.title2)
                                        //multicolor
                                        .symbolVariant(.fill)
                                        .symbolRenderingMode(.palette)
                                        .foregroundStyle(.white, .yellow)
                                        //max frame
                                        .frame(height: 30)

                                        Text("\(Int(celsius))")
                                        .font(.callout.bold())
                                        .foregroundStyle(.white)
                                    }
                                    .padding(.horizontal, .medium)
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
        VStack(spacing: 0) {
            titleView
            .font(.callout)
            .lineLimit(1)
            //max height
            .frame(height: 38)
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(.leading)
            .background(.ultrathinMaterial, in: CustomCorner(corners: [.topLeft, .topRight], radius: 12)) 

            VStack {
                Divider()

                contentView
                .padding()
            }
            .background(.ultrathinMaterial, in: CustomCorner(corners: [.bottomLeft, .bottomRight], radius: 12))
        }
        .colorScheme(.dark)
    }
}

struct ContentView {
    var body: some View {
        //getting safe area using GeometryReader since window is deprecated in ios15
        GeometryReader { geometry in

            let topEdge = geometry.safeAreaInsets.top
            Home(topEdge: topEdge)
        }
    }
}