function Pyramid() {
    return (
        <coneGeometry
            attach="geometry"
            args={[1, 2, 3, 1]}
            smoothness={1}
        />
    )
}

export default Pyramid;