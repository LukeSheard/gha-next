function Home(props) {
    return <>{props.message}</>
}

export default Home;

export const getStaticProps = () => {
    return {
        props: {
            message: "Hello world"
        }
    }
}