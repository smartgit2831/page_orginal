import Header from '../component/Header'
import PishnahadVizhe from '../component/PishnahadVizhe'
import Rushoey from '../component/Rushoey'
import SlideAuto from '../component/SlideAuto'
import Soruhi from '../component/Soruhi'
import Abnama from '../component/Abnama'
import Pishnahad from '../component/Pishnahad'
export default function Home() {
  return (
    <div>
      <Header/>
      <Pishnahad/>
      <PishnahadVizhe/>
      <Rushoey/>
      <SlideAuto/>
      <Soruhi/>
      <Abnama/>
    </div>
  )
}
