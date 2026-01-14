/* global hexo */

'use strict';

const Util = require('@next-theme/utils');
const utils = new Util(hexo, __dirname);

// Add comment
hexo.extend.filter.register('theme_inject', injects => {

  const config = utils.defaultConfigFile('twikoo', 'default.yaml');
  if (!config.enable || !config.envId) return;

  injects.comment.raw('twikoo', '<div class="comments"><div id="twikoo-comments"></div></div>', {}, { cache: true });

  injects.bodyEnd.raw('twikoo', utils.getFileContent('twikoo.njk'));

});

// Add post_meta
hexo.extend.filter.register('theme_inject', injects => {

  const config = utils.defaultConfigFile('twikoo', 'default.yaml');
  if (!config.enable || !config.envId) return;
  if (config.visitor) {
    injects.postMeta.raw('twikoo', `
    <span id="{{ url_for(post.path) }}" class="post-meta-item twikoo_visitors" data-flag-title="{{ post.title }}" title="{{ __('post.views') }}">
      <span class="post-meta-item-icon">
        <i class="far fa-eye"></i>
      </span>
      <span class="post-meta-item-text">{{ __('post.views') + __('symbol.colon') }}</span>
      <span id="twikoo_visitors"></span>
    </span>
  `, {}, {});
  }

});
