export default function About() {
    return (
        <div className="py-16 pb-56 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="/src/public/AboutUsPhoto.png"
                            alt="image"
                            loading="lazy"
                            width=""
                            height=""
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">About Us</h2>
                        <p className="mt-6 text-gray-600">
                            Welcome to Simple PC Part Picker, your trustworthy companion in the
                            exhilarating world of custom PC building! Born from a passion for
                            technology and a commitment to accessibility, our website is designed to
                            simplify the complex process of selecting the perfect components for
                            your dream PC. Whether you're a seasoned builder or a newcomer to the PC
                            world, our user-friendly interface and comprehensive database cater to
                            all levels of expertise. Founded by a team of tech enthusiasts and
                            professional system builders, we share your excitement for the latest
                            hardware trends and the satisfaction of a well-assembled rig. Our
                            mission is to demystify the PC building process, making it more
                            accessible and enjoyable for everyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
