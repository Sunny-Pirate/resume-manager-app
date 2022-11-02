import JobTitle from "./(components)/job-title";
import Contacts from "./(components)/contacts";


export default function IndexPage() {
    return <div className='ctxHomepage'>
        <header>
            <h1>Luca Faccio</h1>
            <h2>UX/UI Designer</h2>
            <h2>Frontend Engineer</h2>
            <JobTitle/>
        </header>
        <section className='contacts'>
            <Contacts/>
        </section>
        <section>
            <ul>
                <li><h3>Freelance Frontend Engineer</h3><h4>SunnyDay.Software</h4></li>
                <li><h3>Freelance Network Administrator</h3><h4>Clothing Design</h4></li>
                <li><h3>Pizza Chef</h3><h4>Nerone</h4></li>
            </ul>
        </section>
    </div>
}
