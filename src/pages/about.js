import Link from "next/link"
import Image from "next/image"
const about = () => {
  return (
    <div className="pl-80 pr-8">
        <nav className="flex gap-96 pt-5 pb-28">
            <h1 className="text-2xl">Antonella Serrese</h1>
            <div className="flex ml-96 gap-7">
                <div>
                <Link href={'https://github.com/assolucionesmultimediales'}>
                <Image src={'/github.png'}
                 width={30}
                 height={30}
                 alt="github"/>
                </Link>
                </div>
                 <div>
                <Link href={'https://www.linkedin.com/in/antonella-serrese-315a6951/'}>
                <Image src={'/linkedin.png'}
                 width={30}
                 height={30}
                 alt="linkedin"/>
                </Link>
                </div>
                 <div>
                <Link href={'https://www.instagram.com/antonella.serrese/'}>
                <Image src={'/instagram.png'}
                 width={30}
                 height={30}
                 alt="github"/>
                </Link>
                </div>
            </div>
        </nav>
        <section className="flex gap-20 pb-20">
            <Image src={'/foto.jpg'}
            width={200}
            height={200}
            alt="antonella"
            className="rounded-[25px] border-[2px] border-white "/>
            <div className="w-3/5">
                <h1 className="text-xl mt-5 mb-5">Periodista y Diseñadora Multimedial | Docente universitaria | UX/UI & Dev Lover</h1>
                <p>Soy periodista y casi licenciada en Tecnología Multimedial, con experiencia en comunicación institucional, diseño UX/UI, desarrollo web y marketing digital. Actualmente me desempeño como ayudante de cátedra y profesora adjunta en universidades como Maimónides y la Universidad Torcuato Di Tella, donde enseño programación, diseño aplicado, maquetado y tecnologías creativas como p5.js.

Trabajo también como freelance en diseño gráfico, diseño de interfaces y estrategias de marketing digital para marcas. Manejo herramientas como Figma, React, Tailwind, TouchDesigner y Arduino, y combino lo técnico con lo humano para construir proyectos que sean funcionales, sensibles y con propósito.

Soy madre, intensa, sensible, meticulosa, creativa y profundamente curiosa. En cada proyecto busco unir la lógica del código con el corazón del diseño.</p>
            </div>
        </section>
        <section>
            <div>
                <h1 className="pb-5 text-lg underline">Ilustraciones</h1>
                <div className="flex gap-20">
                    <Image
                    src={'/f1.jpg'}
                    width={250}
                    height={200}
                    alt="sukuna"
                    className="rounded-[25px] border-[2px] border-white"/>
                    <Image
                    src={'/f2.jpg'}
                    width={250}
                    height={200}
                    alt="sukuna"
                    className="rounded-[25px] border-[2px] border-white"/>
                    <Image
                    src={'/f3.jpg'}
                    width={200}
                    height={200}
                    alt="sukuna"
                    className="rounded-[25px] border-[2px] border-white"/>
                    <Image
                    src={'/f4.jpg'}
                    width={200}
                    height={200}
                    alt="sukuna"
                    className="rounded-[25px] border-[2px] border-white"/>
                </div>
            </div>
        </section>

    </div>
  )
}

export default about