export default function Page() {
    return(
        <div className="flex flex-col justify-center bg-white p-5">
            <h1 className="text-xl text-center font-bold mb-3">Wilayah Desa Tamannyeleng</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31786.91406128268!2d119.39668278347632!3d-5.205314926327036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1df7d01389a9%3A0x3c789d201a21bce8!2sTamanyeleng%2C%20Barombong%2C%20Gowa%20Regency%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1690547028804!5m2!1sen!2sid" 
            width="full" 
            height="300" 
            style={{border:0}} 
            // allowfullscreen="" 
            loading="lazy" ></iframe>
        </div>
    )
}