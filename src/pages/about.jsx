export default function About() {
    return (
        <div class="py-16 bg-white">
            <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div class="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1612833603922-5e9b5f8b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                            alt="image"
                            loading="lazy"
                            width=""
                            height=""
                        />
                    </div>
                    <div class="md:7/12 lg:w-6/12">
                        <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Us Page
                        </h2>
                        <p class="mt-6 text-gray-600">
                            First Paragraph
                        </p>
                        <p class="mt-4 text-gray-600">
                            Second Paragraph
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
