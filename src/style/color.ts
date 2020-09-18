import { generate, PalettesProps } from '@ant-design/colors';

const presetPrimaryColors = {
    red: '#ff3333',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52c41a',
    cyan: '#13C2C2',
    blue: '#5374c0',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666'
};

const presetPalettes: PalettesProps = {};
const presetDarkPalettes: PalettesProps = {};
Object.keys(presetPrimaryColors).forEach(key => {
    presetPalettes[key] = generate(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

    presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
        theme: 'dark',
        backgroundColor: '#141414'
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

export { presetPalettes, presetDarkPalettes, presetPrimaryColors };
