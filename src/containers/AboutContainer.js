import Image from "next/image"
import Link from "next/link"

export const AboutContainer = () => {
  return (
    <div className="pl-80 pr-8">
        <nav className="flex gap-96 pt-5 pb-28">
            <h1 className="text-2xl font-extrabold">Antonella Serrese ♥</h1>
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
                <h1 className="text-xl font-bold mt-5 mb-5">Periodista y Diseñadora Multimedial | Docente universitaria | UX/UI & Dev Lover</h1>
                <p>Soy periodista y casi licenciada en Tecnología Multimedial, con experiencia en comunicación institucional, diseño UX/UI, desarrollo web y marketing digital. Actualmente me desempeño como ayudante de cátedra y profesora adjunta en universidades como Maimónides y la Universidad Torcuato Di Tella, donde enseño programación, diseño aplicado, maquetado y tecnologías creativas como p5.js.

Trabajo también como freelance en diseño gráfico, diseño de interfaces y estrategias de marketing digital para marcas. Manejo herramientas como Figma, React, Tailwind, TouchDesigner y Arduino, y combino lo técnico con lo humano para construir proyectos que sean funcionales, sensibles y con propósito.

Soy madre, intensa, sensible, meticulosa, creativa y profundamente curiosa. En cada proyecto busco unir la lógica del código con el corazón del diseño.</p>
            </div>
        </section>
        <section className="pb-10">
            <div>
                <h1 className="pb-5 text-lg underline font-bold">Ilustrations</h1>
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
                    alt="gojo"
                    className="rounded-[25px] border-[2px] border-white"/>
                    <Image
                    src={'/f3.jpg'}
                    width={200}
                    height={200}
                    alt="kawai"
                    className="rounded-[25px] border-[2px] border-white"/>
                    <Image
                    src={'/f4.jpg'}
                    width={200}
                    height={200}
                    alt="usagu"
                    className="rounded-[25px] border-[2px] border-white"/>
                </div>
            </div>
        </section>
        <section className="pb-28">
            <h1 className="pb-5 text-lg underline font-bold">Dev Projects</h1>
            <div className="flex gap-10">
                <div>
                <p className="pb-5 cursor-pointer">Space adventure game</p>
                <Link href={'https://space-adventure-bvspgpqno-assolucionesmultimediales-projects.vercel.app/'}>
                <Image
                src={'/p1.jpg'}
                width={250}
                height={200}
                alt="space adventure"
                className="rounded-[25px] border-[2px] border-white"/>
                </Link>
                </div>
                <div>
                <p className="pb-5 cursor-pointer">Art Portfolio</p>
                <Link href={'https://sasha-7fbqx2eh2-assolucionesmultimediales-projects.vercel.app/'}>
                <Image
                src={'/p3.jpg'}
                width={250}
                height={200}
                alt="Art Portfolio"
                className="rounded-[25px] border-[2px] border-white"/>
                </Link>
                </div>
                <div>
                <p className="pb-5 cursor-pointer">Ecommerce</p>                    
                <Link href={'https://ecommerce-psi-sable.vercel.app/'}>
                <Image
                src={'/p2.jpg'}
                width={250}
                height={200}
                alt="Ecommerce"
                className="rounded-[25px] border-[2px] border-white"/>
                </Link>
                </div>
                <div>
                <p className="pb-5 cursor-pointer">p5 Glitch Art</p>                    
                <Link href={'https://p5glitchart.vercel.app/'}>
                <Image
                src={'/p4.jpg'}
                width={250}
                height={200}
                alt="p5 glitch art"
                className="rounded-[25px] border-[2px] border-white"/>
                </Link>
                </div>
            </div>
        </section>
        <div className="pb-28">
       <Link className="px-4 py-2 rounded border-[2px] border-white transition hover:bg-white hover:text-black" href={'/.'}>Volver al inicio</Link>
       </div>
      </div>
  )
}
