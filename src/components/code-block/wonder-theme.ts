import tkns from '@wonderflow/tokens/platforms/web/tokens.json'
import { PrismTheme } from 'prism-react-renderer'

const theme: PrismTheme = {
  plain: {
    color: `hsl(${tkns.color.primary['5']})`,
    backgroundColor: `hsl(${tkns.color.primary[90]})`
  },
  styles: [{
    types: ['changed'],
    style: {
      color: `hsl(${tkns.color.blue[80]})`,
      fontStyle: 'italic'
    }
  }, {
    types: ['deleted'],
    style: {
      color: `hsl(${tkns.color.red[20]})`,
      fontStyle: 'italic'
    }
  }, {
    types: ['inserted', 'attr-name'],
    style: {
      color: `hsl(${tkns.color.red[20]})`,
      fontStyle: 'italic'
    }
  }, {
    types: ['comment'],
    style: {
      color: `hsl(${tkns.color.primary[40]})`,
      fontStyle: 'italic'
    }
  }, {
    types: ['string', 'url'],
    style: {
      color: `hsl(${tkns.color.green[10]})`
    }
  }, {
    types: ['variable'],
    style: {
      color: `hsl(${tkns.color.support.white})`
    }
  }, {
    types: ['number'],
    style: {
      color: `hsl(${tkns.color.yellow[20]})`
    }
  }, {
    types: ['builtin', 'char', 'constant'],
    style: {
      color: `hsl(${tkns.color.cyan[20]})`
    }
  }, {
    types: ['function'],
    style: {
      color: `hsl(${tkns.color.blue[10]})`
    }
  }, {
    types: ['constant'],
    style: {
      color: `hsl(${tkns.color.primary[80]})`
    }
  }, {
    // This was manually added after the auto-generation
    // so that punctuations are not italicised
    types: ['punctuation', 'operator'],
    style: {
      color: `hsl(${tkns.color.purple[20]})`
    }
  }, {
    types: ['selector', 'doctype'],
    style: {
      color: `hsl(${tkns.color.red[20]})`,
      fontStyle: 'italic'
    }
  }, {
    types: ['class-name'],
    style: {
      color: `hsl(${tkns.color.cyan[20]})`
    }
  }, {
    types: ['tag'],
    style: {
      color: `hsl(${tkns.color.green[10]})`
    }
  }, {
    types: ['keyword', 'atrule'],
    style: {
      color: `hsl(${tkns.color.red[20]})`
    }
  }, {
    types: ['boolean'],
    style: {
      color: `hsl(${tkns.color.red[20]})`
    }
  }, {
    types: ['property'],
    style: {
      color: `hsl(${tkns.color.cyan[20]})`
    }
  }, {
    types: ['namespace'],
    style: {
      color: `hsl(${tkns.color.primary[60]})`
    }
  }]
}

export default theme
