import {loadImage, fileToBase64, base64ToFile} from '../src/index';

const png = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052649468,2386213407&fm=26&gp=0.png';
const jpg = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3555314764,3806228019&fm=26.jpg';
const gif = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2072565181,3786871472&fm=26&gp=0.gif';
const noTailing = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3183691098,1018415343&fm=26&gp=0';

describe('#loadImage', () => {
  test(`loadImage jpg with default configuration`, async () => {
    const {url, width, height} = await loadImage(jpg);
    expect(url).toBe(jpg);
    expect(width).toBe(533);
    expect(height).toBe(300);
  });
  test(`loadImage png with default configuration`, async () => {
    const {url, width, height} = await loadImage(png);
    expect(url).toBe(png);
    expect(width).toBe(500);
    expect(height).toBe(500);
  });
  test(`loadImage gif with default configuration`, async () => {
    const {url, width, height} = await loadImage(gif);
    expect(url).toBe(gif);
    expect(width).toBe(220);
    expect(height).toBe(220);
  });
  test(`loadImage noTailing image with default configuration`, async () => {
    const {url, width, height} = await loadImage(noTailing);
    expect(url).toBe(noTailing);
    expect(width).toBe(500);
    expect(height).toBe(500);
  });
  test(`loadImage width noCache`, async () => {
    const {width, height} = await loadImage(jpg, {noCache: true});
    expect(width).toBe(533);
    expect(height).toBe(300);
  });
  test(`loadImage & create Base64`, async () => {
    const {base64} = await loadImage(jpg, {base64: true});
    expect(base64).not.toBeUndefined();
  });
  test(`loadImage & create File`, async () => {
    const {base64, file} = await loadImage(jpg, {file: true});
    expect(base64).not.toBeUndefined();
    expect(file).not.toBeUndefined();
  });
  test(`loadImage noTailing & create Base64`, async () => {
    const {base64} = await loadImage(noTailing, {file: true});
    expect(base64).not.toBeUndefined();
  });
});
describe('#fileToBase64', () => {
  test(`fileToBase64`, async () => {
    const {file} = await loadImage(jpg, {file: true});
    const base64 = await fileToBase64(file as File);
    expect(base64).not.toBeUndefined();
  });
});
describe('#base64ToFile', () => {
  test(`base64ToFile`, async () => {
    const {file} = await loadImage(jpg, {file: true});
    const base64 = await fileToBase64(file as File);
    const newFile = base64ToFile(base64, '图片');
    expect(newFile).not.toBeUndefined();
  });
});
