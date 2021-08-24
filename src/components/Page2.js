import React from 'react';
import { ReactLazyPreload } from '../utils/Functions';

const Page3 = ReactLazyPreload(() => import(/* webpackChunkName: "page-3" */ './Page3'));

class Page2 extends React.Component {

  componentDidMount() {
    Page3.preload();
  }

  handleNext = (e) => {
    e.preventDefault();
    this.props.history.push('/page-3');
  };

  render() {
    return (
    	<>
        <h1>Page 2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida leo in pharetra sagittis. Donec sed tempus ex, nec rhoncus justo. Phasellus auctor diam eleifend, vestibulum justo ac, ultrices ipsum. Donec pretium augue ante, eget eleifend mi vehicula eu. Donec vitae sem erat. Vestibulum tincidunt suscipit ex, vitae condimentum odio ornare in. Vestibulum erat neque, semper sit amet suscipit vel, malesuada in diam. Morbi ut eros eget lectus sodales rhoncus.</p>
        <p>Suspendisse blandit massa dui, in tincidunt erat suscipit vel. Vivamus posuere est nibh, eget tempus nibh sollicitudin molestie. Nulla sit amet ultricies erat. Maecenas faucibus felis ut placerat varius. Sed feugiat nibh ac ipsum dignissim, ac posuere magna ultricies. Vivamus malesuada ac arcu in vulputate. Praesent venenatis nulla sit amet nibh sagittis, sed tristique est tincidunt. Curabitur condimentum, lectus et vulputate consequat, nulla lorem tincidunt eros, in semper turpis mi a diam. Praesent ornare condimentum dolor, quis bibendum diam ultrices in. Pellentesque nec felis et erat egestas malesuada sed et ante. In luctus diam lectus, eget dignissim felis consequat sed.</p>
        <p>Fusce malesuada justo eu eros gravida dignissim. In hac habitasse platea dictumst. Praesent eu erat id urna tincidunt egestas. Donec at sapien quis purus semper venenatis non at risus. Integer nec laoreet risus. Donec a mattis elit, quis iaculis ante. Etiam non nulla eget odio lobortis rhoncus sed eget mi. Integer consequat velit hendrerit ipsum faucibus, quis semper enim volutpat. Vivamus tempus dui et scelerisque imperdiet.</p>
        <p>Fusce nibh massa, feugiat ut mi ut, vulputate dapibus nisl. Suspendisse potenti. Nunc placerat ante in felis sodales aliquam. Vestibulum id sapien mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum nisi ut quam efficitur viverra. In imperdiet placerat eros, tempus sodales enim blandit ac. Quisque nec molestie ante, quis consectetur elit.</p>
        <p>Praesent tortor urna, tempus eu tincidunt at, fringilla vel diam. Nulla vehicula est non turpis maximus posuere. Phasellus ultricies ultrices leo nec lobortis. Ut dictum fermentum sapien mattis rutrum. Nulla eu fermentum ipsum. Etiam viverra et arcu at porttitor. In sed risus sed metus scelerisque mollis. Nulla nisl turpis, luctus sit amet dolor at, rutrum feugiat nisi. Curabitur aliquam interdum porta. Quisque sollicitudin vitae sapien vitae gravida. Maecenas nec viverra magna. Nulla facilisi. Nullam convallis sagittis felis ut viverra. Praesent rutrum justo sit amet ligula pellentesque tincidunt. Proin eget urna id mauris cursus pulvinar ut eget enim. Aliquam faucibus ligula eget dignissim vehicula.</p>
        <div style={{ textAlign: 'center' }}>
          <button type="button" onClick={this.handleNext} className="button-next">NEXT</button>
        </div>
      </>
    )
  }
}

export default Page2;
