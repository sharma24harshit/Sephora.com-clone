import { Skeleton} from '@chakra-ui/react'
function Loader1(){
return(
    <div className='loaders' >
  <Skeleton height='200px' width="200px" />
  <Skeleton height='200px' width="200px" />
  <Skeleton height='200px' width="200px" />
  <Skeleton height='200px' width="200px" />
  <Skeleton height='200px' width="200px" />
  <Skeleton height='200px' width="200px" />
  </div>
)
}
function Loader2(){
return (
    <div className='loaders' >
  <Skeleton height='400px' width="300px" />
  <Skeleton height='400px' width="300px" />
  <Skeleton height='400px' width="300px" />
  <Skeleton height='400px' width="300px" />
  </div>
)
}
function Loader3(){
return (
    <div className='loaders' >
  <Skeleton height='400px' width="700px" />
  </div>
)
}


export {Loader1,Loader2,Loader3}