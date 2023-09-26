export default function Data () {
    return (
        <div className="flex flex-row items-center caixa-rosa w-1/2">
            <img className="calendar-icon" src="/images/calendar.svg" alt="calendario" />
            <div className="flex flex-col text-4xl mx-5 font-sansitaone">
                <span className="calendar-text">
                    de 
                    <strong>23</strong> 
                    a 
                    <strong>27</strong>
                    <br />
                    de outubro de 2023
                </span>
            </div>
        </div>
    )
}