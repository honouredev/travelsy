
const FirstSection = () => {
    return (
        <main>
            <section className="find">
                <h1>Find An <br/> Experience</h1>
                <p>To find you the best experiences, we will ask you a few questions to and <br/> show you experiences basd on your preferences.</p>
                <div>
                <p>How much time do you have?</p>
                <input type="checkbox" value="weekend" name="time" id="day"/> 
			<label for ="code">A weekend</label>

                <input type="checkbox" value="week" name="time" id="week"/> 
			<label for ="code">A week</label>

            <input type="checkbox" value="month" name="time" id="month"/> 
			<label for ="code">A month</label>

            <input type="checkbox" value="days" name="time" id="days"/> 
			<label for ="code">A few days, specify</label>
                </div>
            </section>
        </main>
    )
}
export default FirstSection;