import Card from "./Cards"

const About = () => {
    return (
        <section>
            <h2>About Me</h2>
            <Card
                title = "Who I Am"
                description= "I am a Full Stack Web Developer apssinate about Building stunning UIs, Scalable and robust backends"
                buttonText="Read More"
            />
            <Card 
                title= "My Goal"
                description="To build scalable and real-world applications"    
            />
        </section>
    )
}

export default About