function Cube() {
    return (
        <boxBufferGeometry
            attach="geometry"
            args={[1, 1, 1]}
            smoothness={1}
        />
    )
}

export default Cube;