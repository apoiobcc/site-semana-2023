"use client"
import Aviso from "@/components/aviso/Aviso"

export default function Mapa() {
    return (
        <div className="border-2 border-black w-full flex justify-center flex-col bg-red-200">
            <Aviso titulo="Como chegar" />
            <iframe 
                className="flex self-center m-3 border-black border-2" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2516890350707!2d-46.73441312389534!3d-23.559402378801174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5614445ea63f%3A0x81bb971c3a8f0fcf!2sInstituto%20de%20Matem%C3%A1tica%20e%20Estat%C3%ADstica%20da%20Universidade%20de%20S%C3%A3o%20Paulo%20(IME-USP)!5e0!3m2!1spt-BR!2sbr!4v1695764603757!5m2!1spt-BR!2sbr" 
                width="1500" 
                height="450" 
                style={{border: "0"}}
                loading="lazy" 
            >
            </iframe>
        </div>
    )
}