function FileUploadResult() {
    const imgset = '/image_save/iu.jpg'
    const imgset2 = '/image_save/winter.jpg'
    const imgset3 = '/image_save/grid.png'
    const imgset4 = '/image_save/select.png'
    const imgset5 = '/image_save/change.png'
    const imgset6 = '/image_save/motion.gif'


    return (
        <>
        <div>
            <img src={imgset} width={500} height={500}/>

        </div>
        <style jsx>{`
            div {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        `}</style>
        </>
    )
}

export default FileUploadResult