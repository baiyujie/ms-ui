import avalon from 'avalon2'
import './style.scss';

avalon.component('ms-breadcrumb', {
  template: `
    <div class="ms-breadcrumb">
      <slot />
    </div>
  `,
  defaults: {

  }
})
