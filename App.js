import Header from './Header';
import Footer from './Footer';
import IllustrationPhone from './IllustrationPhone';
import IllustrationEditorDesktop from './IllustrationEditorDesktop';
import IllustrationLaptop from './IllustrationLaptop';
import './css/App.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="futur">
          <h2 id="dd">Designed for the future</h2>
          <section className="avenir">
            <article className="descrip">
                <article className="desc">
                  <h3>Introductiong an extensible editor</h3>
                  <p className="dec">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo erat eget ligula sodales, vitae varius turpis faucibus. Phasellus consectetur nibh id orci auctor, vitae commodo massa dapibus. Donec eget fermentum turpis, vel ornare erat. Sed rhoncus sodales orci in consectetur. In eu sollicitudin nulla. Nulla sed nibh non augue dictum mattis vitae at lacus. Donec feugiat, sapien id euismod commodo, libero mauris semper elit, a facilisis est dolor nec neque. Ut porta semper pharetra. Donec sagittis, nunc vel dignissim posuere, purus sem hendrerit elit, non sodales leo ex ut sapien. Proin velit sem, lacinia a nisl id, vehicula efficitur risus. Aliquam nec urna fringilla, dictum sapien id, efficitur orci.
                  </p>
                </article>
                <article className="desc">
                  <h3>Robust content management</h3>
                  <p className="dec">
                    Morbi eget nunc enim. Vivamus elementum lectus quis aliquet blandit. Ut elementum efficitur pulvinar. Integer at turpis a nulla suscipit congue. Mauris id ligula dictum, fringilla ex quis, pretium leo. Aenean ac purus nulla. Nam aliquam odio dapibus sapien varius laoreet. Suspendisse ex elit, ullamcorper scelerisque risus sed, dapibus eleifend neque. Vestibulum est nibh, faucibus sagittis sapien quis, porttitor tincidunt nibh. Praesent id mi et elit accumsan ullamcorper a at erat. Mauris luctus pulvinar sem, et dignissim ipsum convallis rutrum. In rhoncus velit ut pharetra dapibus. Vivamus faucibus elit id leo feugiat, nec rhoncus ligula congue. Fusce porta mauris dui, eu aliquet nisi ultricies in.
                  </p>
                </article>
            </article>
            <aside className="graph">
                <IllustrationEditorDesktop/>
            </aside>          
          </section>    
      </div>
      <div className="phone">
        <nav className="bar">
        </nav>
        <section className="smartphone">
            <article className="onze">
              <IllustrationPhone/>
            </article>
            <aside className="art">
                <h3 className="infra">State of the Art Infrastructure</h3>
                <p className="infra">
                  Mauris pellentesque condimentum odio, et venenatis leo malesuada a. Nam non feugiat arcu. Ut tempor sollicitudin purus, id lacinia leo dignissim eu. Vivamus molestie dictum purus eu hendrerit. Aenean hendrerit nec lorem a finibus. Nunc id nunc lacus. Suspendisse sollicitudin eros tellus. Nullam dictum, arcu eget mattis aliquet, sem orci volutpat ligula, id gravida libero odio et lacus. Cras ut fermentum sapien, tincidunt volutpat diam. Morbi ultrices vel velit vitae condimentum. Nulla sit amet commodo mauris. Praesent eu orci nec magna auctor placerat tincidunt in arcu. Proin viverra felis non tortor congue blandit. Aliquam eu convallis quam, ut blandit erat. Fusce euismod libero nec erat vulputate, ac congue diam egestas. Curabitur maximus elit at molestie pretium.
                </p>
            </aside>
          </section>
      </div>
      <div className="pc">
        <article className="mac">
            <IllustrationLaptop/>
        </article>
        <aside className="sdecrip">
          <aside className="sdec">
            <h3>Free, open, simple</h3>
            <p>Nulla porttitor lacus non urna aliquet congue. Phasellus vitae nulla nibh. Sed pretium enim justo, sed efficitur tellus molestie in. In id metus a arcu lobortis aliquet. Maecenas bibendum rutrum nunc, quis fermentum ipsum rhoncus et. Ut rutrum velit libero, sollicitudin sollicitudin tellus pharetra vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce elementum, risus id ullamcorper venenatis, dui tortor lacinia mauris, nec condimentum nunc dolor id turpis.</p>
          </aside>
          <aside className="sdec">
            <h3>Powerful footling</h3>
            <p>Aenean nec ante volutpat, varius ligula et, ornare ante. Phasellus maximus sed diam non pretium. Curabitur venenatis auctor rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae leo ut quam dapibus ultricies in vel leo. Morbi tincidunt faucibus dui eget rutrum. Sed semper in lacus nec porta.</p>
          </aside>
        </aside>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
