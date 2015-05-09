import animate from 'aum-animate';
import cancel from 'aum-cancel';
import dispatch from 'aum-dispatch';
import id from 'aum-id';

export default function () {
  if (id()) {
    cancel(id());

    dispatch('id', animate(function () {
      dispatch('render');
      dispatch('id');
    }));
  }
  else {
    dispatch('render');

    dispatch('id', animate(function () {
      dispatch('id');
    }));
  }
}

