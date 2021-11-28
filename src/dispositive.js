import useQueryExact from "./useQueryExact"

function Dispositive(){

    let galaxyFold = useQueryExact(281,0)
    let iphone5 = useQueryExact(321,281)
    let galaxy = useQueryExact(361,321)
    let iphone6 = useQueryExact(376,361)
    let pixel = useQueryExact(412,376)
    let iphonePlus = useQueryExact(415,412)
    let surface = useQueryExact(541,415)

    let dispositive = galaxyFold ? "galaxyFold" : iphone5 ? "iphone5" : galaxy ? "galaxy" : iphone6 ? "iphone6" : pixel ? "pixel" : iphonePlus ? "iphonePlus" : surface ? "surface" : "desktop"
    

    return dispositive
}

export default Dispositive