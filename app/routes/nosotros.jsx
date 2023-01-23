import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return({
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de musica.'
  })
}

export function links(){
  return[
    {
        rel: 'stylesheet',
        href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">
        Nosotros.
      </h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Pellentesque cursus, quam quis finibus dignissim, odio nunc mollis neque, quis vulputate ipsum ligula ac turpis. In massa eros, mollis et consectetur nec, cursus at tellus. Phasellus justo erat, semper at congue at, viverra at nisl. Nullam vitae magna posuere, aliquam nisi at, blandit nibh. In condimentum, dolor vitae tincidunt eleifend, ipsum ex tempor nunc, nec auctor dolor erat at nunc. In vitae pharetra tortor. Proin viverra convallis lorem egestas interdum.</p>
          <p> Vivamus et purus sed orci tempus tristique. Morbi id arcu in arcu finibus hendrerit vitae eget odio. Curabitur id iaculis ex. Sed sagittis ultricies dui sit amet rutrum. In tempus, risus at porta ultricies, ligula neque facilisis diam, et mattis erat purus sed metus. Etiam justo odio, interdum id tortor a, fringilla mollis turpis. Praesent tortor elit, ullamcorper id scelerisque sit amet, consectetur blandit arcu. Nulla ut purus et metus interdum gravida nec at nibh. Duis quis consequat turpis.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros