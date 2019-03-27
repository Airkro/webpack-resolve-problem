# webpack-resolve-problem

## issues: `config.module.rule[].resolve` didn't merge with `config.resolve`

<https://github.com/webpack/webpack/issues/8968>

```bash
npm run start
```

### Q&A

Q: Why do I use the `resolve.alias` option in `modules.rules[]` ?

A: I learned that it is available. So use it with the `include` option to limit its scope.

### Current behaviour

`config.modules.rules[].resolve.alias` is working but `config.resolve.alias` not work any more.

### What I expected

- `config.resolve.alias`
- `config.modules.rules[].resolve.alias`

`webpack` should auto merge them, make them work together?
