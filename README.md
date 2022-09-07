This illustrates a bug where 2 exact same rollup projects create different hashes based on the directory of the project.

You can copy paste these commands to create the rollup bundle. You will see that
the output of directory a is different than directory b.

```
git clone https://github.com/wmassa/rollup-directory-hash-repro;\
cd rollup-directory-hash-repro;\
cd a; \
npm install; \
rollup main.js -c rollup.config.ts --format cjs; \
cd ..; \
cd b; \
npm install; \
rollup main.js -c rollup.config.ts --format cjs; \
cd ..; \
echo 'a bundle'; \
ls a/bundle;\
echo 'b bundle'; \
ls b/bundle;
```
