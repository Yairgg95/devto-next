export default function SidebarCard() {
    return (
        <section className="bg-[#FFFFFF] rounded mt-4 p-4 flex flex-col mb-4">
            <div className="flex flex-col mb-4">
                <h3 className="text-xl mb-2">
                    <a className="text-black no-underline text-lg" href="#">#wecoded</a>
                </h3>
                <div className="flex flex-col text-gray-700">
                    we_coded is a celebration of individuals who are underrepresented and otherwise marginalized in
                    software development on the basis of gender including women, transgender, nonbinary, gender
                    non-conforming, and two spirit people.
                </div>
            </div>
            <div className="flex flex-col mb-4">
                <a href="#" className="no-underline text-gray-800 mb-2 hover:text-blue-600">
                    From Coding to Writing: My Unexpected Blogging Journey
                    <div className="text-gray-600">4 comments</div>
                </a>
                <a href="#" className="no-underline text-gray-800 mb-2 hover:text-blue-600">
                    Wecoded! My own story lines 2024
                    <div className="text-gray-600">2 comments</div>
                </a>
            </div>
        </section>
    );
}