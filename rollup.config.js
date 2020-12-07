import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import postCSS from 'rollup-plugin-postcss';
import path from 'path';
import fs from 'fs-extra';

const isPackingType = process.env.PACK === 'type';

const getCategory = category => {
    let dir = path.resolve('src', category);
    let items = fs.readdirSync(dir);
    items = items.filter(item => {
        let stat = fs.statSync(path.join(dir, item));
        return stat.isDirectory();
    });

    return items.map(item => ({
        input: `src/${category}/${item}/index.ts`,
        output: [
            {
                file: `lib/${item}.js`,
                format: 'es'
            }
        ],
        ...base
    }));
};

const base = {
    external: ['vue'],
    plugins: [typescript(), resolve(), vue(), postCSS(), commonjs()]
};

let config = [
    {
        input: 'src/lib.ts',
        output: [
            {
                file: 'lib/index.cjs.js',
                format: 'cjs'
            },
            {
                file: 'lib/index.esm.js',
                format: 'es'
            }
        ],
        ...base
    },
    ...getCategory('mixins')
];

if (isPackingType) {
    config = {
        input: './lib/src/lib.d.ts',
        output: [{ file: 'lib/index.d.ts', format: 'es' }],
        plugins: [dts()]
    };
}

export default config;
