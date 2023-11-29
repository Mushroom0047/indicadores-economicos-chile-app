import { Button } from '@material-tailwind/react';

const NoPage = () => {
  return (
        <section className="h-96 flex flex-col justify-center items-center gap-5 min-h-screen">
          <h1 className="">404</h1>
          <p>No encontramos lo que buscas :(</p>
          <Button color='teal'><a href="/">Volver al inicio</a></Button>
        </section>
  )
}
export default NoPage;