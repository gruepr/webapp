import joshImage from "../../img/josh.jpg"


const AboutJosh = () => {
    return (
        <div className="bg-primary-50 py-10 ">

            <div className="content flex py-2">
                <img src={joshImage} className="h-[20rem] px-20 " />
                <h1 class=" py-10 text-3xl text-dark font-bold drop-shadow-lg dmsans ">The Gruepr Backstory</h1>
                <p class=" pl-[30rem] pr-[5rem] py-20 absolute text-gray-700 text-base dmsans dark">As an educator, I want my students to have the best possible experience during group work. I created gruepr because I was spending too much time assembling teams that accounted for my students' individual schedules and past experiences. I wanted a tool that could help me, and I wanted to keep it always free and open source for my fellow educators. The first version of the app was named "grouper," and that inspired my scuba-diving colleage to give me a fish logo. The name later changed to "gruepr" because the challenges of developing my first app reminded me of trying to avoid the fictional monster that haunts the dark in the first computer game I remember ever playing.
            </p>

            </div>



           


        </div>
    )


}
export default AboutJosh;