import Header from '../component/Header'
import PishnahadVizhe from '../component/PishnahadVizhe'
import Rushoey from '../component/Rushoey'
import SlideAuto from '../component/SlideAuto'
import Soruhi from '../component/Soruhi'
import Abnama from '../component/Abnama'
import Pishnahad from '../component/Pishnahad'
import Parametr from '../component/Parametr'
export default function Home() {
  return (
    <div>
      <Header/>
      <Pishnahad/>
      <PishnahadVizhe/>
      <Parametr/>
      <Rushoey/>
      <SlideAuto/>
      <Soruhi/>
      <Abnama/>
    </div>
  )
}
