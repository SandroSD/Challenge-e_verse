function Sphere() {
    return (
        <sphereGeometry
            attach="geometry"
            args={[1, 20, 80]}
            smoothness={1}
        />
    )
}

export default Sphere;