struct Home: View {
    @State var offset: CGFloat = 0
    var topEdge: CGFloat  
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
                        .opacity(getTitleOpacity())

                        Text("Cloudy")
                        .foregroundStyle(.secondary)
                        .foregroundStyle(.white)
                        .shadow(radius: 5)
                        .opacity(getTitleOpacity())

                        Text("H:33 L:15")
                        .foregroundStyle(.primary)
                        .foregroundStyle(.white)
                        .shadow(radius: 5)
                        .opacity(getTitleOpacity())
                    }
                    .offset(y: -offset)
                    //for bottom drag effect
                    .offset(y: offset > 0 ? (offset / UIScreen.main.bounds.width) * 100 : 0)
                    .offset(y: getTitleOffset())

                    //Custom Data View
                    VStack(spacing: 8) {
                        //Custom Stack
                        
                        //For Testing...
                        ForEach(1...5, id: \.self) { _ in
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

    func getTitleOffset() -> CGFloat {
        //setting a single max height for whole title
        //consider max as 120
        if offset < 0 {

            let progress = -offset / 120

         //since top padding is 25
            let newOffset = (progress <= 1.0 ? progress : 1) * 20

            return -newOffset 
        }

        return 0
    }

    func getTitleOpacity() -> CGFloat {
        let titleOffset = -getTitleOffset()

        let progress = titleOffset / 20

        let opacity = 1 - progress

        return opacity
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

    //Offsets
    @State private var topOffset: CGFloat=0
    @State private var bottomOffset: CGFloat=0

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
            .zIndex(1)

            VStack {
                Divider()

                contentView
                .padding()
            }
            .background(.ultrathinMaterial, in: CustomCorner(corners: [.bottomLeft, .bottomRight], radius: 12))
            //Moving content Upward
            .offset(y: topOffset >= 120 ? 0 : -(-topOffset + 120))
            .zIndex(0)
            //clipping to avoid background overlay
            
        }
        .colorScheme(.dark)
        .cornerRadius(12)
        //stopping View at 120
        .offset(y: topOffset >= 120 ? 0 : -topOffset + 120)
        .background(
            GeometryReader{ geometry -> Color in
                let minY = proxy.frame(in: .global).minY

                DispatchQueue.main.async {
                    self.topOffset = minY
                }

                return Color.clear
            }
        )
    }
}

struct ContentView {
    var body: some View {
        //getting safe area using GeometryReader since window is deprecated in ios15
        GeometryReader { geometry in
            let topEdge = geometry.safeAreaInsets.top
            Home(topEdge: topEdge)
            .ignoresSafeArea(.all, edges: .top)
        }
    }
}