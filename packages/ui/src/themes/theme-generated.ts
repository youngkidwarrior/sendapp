type Theme = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;
  blue11: string;
  blue12: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  orange11: string;
  orange12: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;
  pink10: string;
  pink11: string;
  pink12: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple6: string;
  purple7: string;
  purple8: string;
  purple9: string;
  purple10: string;
  purple11: string;
  purple12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;
  gold1: string;
  gold2: string;
  gold3: string;
  gold4: string;
  gold5: string;
  gold6: string;
  gold7: string;
  gold8: string;
  gold9: string;
  gold10: string;
  gold11: string;
  gold12: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;

}

function t(a) {
  let res: Record<string, string> = {}
  for (const [ki, vi] of a) {
    // @ts-ignore
    res[ks[ki]] = vs[vi]
  }
  return res
}
const vs = [
  '#fff',
  '#f9f9f9',
  'hsl(0, 0%, 97.3%)',
  'hsl(0, 0%, 95.1%)',
  'hsl(0, 0%, 94.0%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 89.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
  'rgba(255,255,255,0)',
  'rgba(10,10,10,0)',
  'hsl(206, 100%, 99.2%)',
  'hsl(210, 100%, 98.0%)',
  'hsl(209, 100%, 96.5%)',
  'hsl(210, 98.8%, 94.0%)',
  'hsl(209, 95.0%, 90.1%)',
  'hsl(209, 81.2%, 84.5%)',
  'hsl(208, 77.5%, 76.9%)',
  'hsl(206, 81.9%, 65.3%)',
  'hsl(206, 100%, 50.0%)',
  'hsl(208, 100%, 47.3%)',
  'hsl(211, 100%, 43.2%)',
  'hsl(211, 100%, 15.0%)',
  'hsl(0, 0%, 99.0%)',
  'hsl(0, 0%, 93.0%)',
  'hsl(0, 0%, 90.9%)',
  'hsl(0, 0%, 88.7%)',
  'hsl(0, 0%, 85.8%)',
  'hsl(0, 0%, 78.0%)',
  'hsl(0, 0%, 52.3%)',
  'hsl(0, 0%, 43.5%)',
  'hsl(136, 50.0%, 98.9%)',
  'hsl(138, 62.5%, 96.9%)',
  'hsl(139, 55.2%, 94.5%)',
  'hsl(140, 48.7%, 91.0%)',
  'hsl(141, 43.7%, 86.0%)',
  'hsl(143, 40.3%, 79.0%)',
  'hsl(146, 38.5%, 69.0%)',
  'hsl(151, 40.2%, 54.1%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(152, 57.5%, 37.6%)',
  'hsl(153, 67.0%, 28.5%)',
  'hsl(155, 40.0%, 14.0%)',
  'hsl(24, 70.0%, 99.0%)',
  'hsl(24, 83.3%, 97.6%)',
  'hsl(24, 100%, 95.3%)',
  'hsl(25, 100%, 92.2%)',
  'hsl(25, 100%, 88.2%)',
  'hsl(25, 100%, 82.8%)',
  'hsl(24, 100%, 75.3%)',
  'hsl(24, 94.5%, 64.3%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(24, 100%, 46.5%)',
  'hsl(24, 100%, 37.0%)',
  'hsl(15, 60.0%, 17.0%)',
  'hsl(322, 100%, 99.4%)',
  'hsl(323, 100%, 98.4%)',
  'hsl(323, 86.3%, 96.5%)',
  'hsl(323, 78.7%, 94.2%)',
  'hsl(323, 72.2%, 91.1%)',
  'hsl(323, 66.3%, 86.6%)',
  'hsl(323, 62.0%, 80.1%)',
  'hsl(323, 60.3%, 72.4%)',
  'hsl(322, 65.0%, 54.5%)',
  'hsl(322, 63.9%, 50.7%)',
  'hsl(322, 75.0%, 46.0%)',
  'hsl(320, 70.0%, 13.5%)',
  'hsl(280, 65.0%, 99.4%)',
  'hsl(276, 100%, 99.0%)',
  'hsl(276, 83.1%, 97.0%)',
  'hsl(275, 76.4%, 94.7%)',
  'hsl(275, 70.8%, 91.8%)',
  'hsl(274, 65.4%, 87.8%)',
  'hsl(273, 61.0%, 81.7%)',
  'hsl(272, 60.0%, 73.5%)',
  'hsl(272, 51.0%, 54.0%)',
  'hsl(272, 46.8%, 50.3%)',
  'hsl(272, 50.0%, 45.8%)',
  'hsl(272, 66.0%, 16.0%)',
  'hsl(359, 100%, 99.4%)',
  'hsl(359, 100%, 98.6%)',
  'hsl(360, 100%, 96.8%)',
  'hsl(360, 97.9%, 94.8%)',
  'hsl(360, 90.2%, 91.9%)',
  'hsl(360, 81.7%, 87.8%)',
  'hsl(359, 74.2%, 81.7%)',
  'hsl(359, 69.5%, 74.3%)',
  'hsl(358, 75.0%, 59.0%)',
  'hsl(358, 69.4%, 55.2%)',
  'hsl(358, 65.0%, 48.7%)',
  'hsl(354, 50.0%, 14.6%)',
  'hsl(60, 54.0%, 98.5%)',
  'hsl(52, 100%, 95.5%)',
  'hsl(55, 100%, 90.9%)',
  'hsl(54, 100%, 86.6%)',
  'hsl(52, 97.9%, 82.0%)',
  'hsl(50, 89.4%, 76.1%)',
  'hsl(47, 80.4%, 68.0%)',
  'hsl(48, 100%, 46.1%)',
  'hsl(53, 92.0%, 50.0%)',
  'hsl(50, 100%, 48.5%)',
  'hsl(42, 100%, 29.0%)',
  'hsl(40, 55.0%, 13.5%)',
  'hsl(50, 20.0%, 99.1%)',
  'hsl(47, 52.9%, 96.7%)',
  'hsl(46, 38.2%, 93.7%)',
  'hsl(44, 32.7%, 90.1%)',
  'hsl(43, 29.9%, 85.7%)',
  'hsl(41, 28.3%, 79.8%)',
  'hsl(39, 27.6%, 71.9%)',
  'hsl(36, 27.2%, 61.8%)',
  'hsl(36, 20.0%, 49.5%)',
  'hsl(36, 19.8%, 45.7%)',
  'hsl(36, 20.0%, 39.0%)',
  'hsl(36, 16.0%, 20.0%)',
  'rgba(0,0,0,0.066)',
  'rgba(0,0,0,0.02)',
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  'hsl(212, 35.0%, 9.2%)',
  'hsl(216, 50.0%, 11.8%)',
  'hsl(214, 59.4%, 15.3%)',
  'hsl(214, 65.8%, 17.9%)',
  'hsl(213, 71.2%, 20.2%)',
  'hsl(212, 77.4%, 23.1%)',
  'hsl(211, 85.1%, 27.4%)',
  'hsl(211, 89.7%, 34.1%)',
  'hsl(209, 100%, 60.6%)',
  'hsl(210, 100%, 66.1%)',
  'hsl(206, 98.0%, 95.8%)',
  'hsl(0, 0%, 8.5%)',
  'hsl(0, 0%, 11.0%)',
  'hsl(0, 0%, 13.6%)',
  'hsl(0, 0%, 15.8%)',
  'hsl(0, 0%, 17.9%)',
  'hsl(0, 0%, 20.5%)',
  'hsl(0, 0%, 24.3%)',
  'hsl(0, 0%, 31.2%)',
  'hsl(0, 0%, 43.9%)',
  'hsl(0, 0%, 49.4%)',
  'hsl(0, 0%, 62.8%)',
  'hsl(146, 30.0%, 7.4%)',
  'hsl(155, 44.2%, 8.4%)',
  'hsl(155, 46.7%, 10.9%)',
  'hsl(154, 48.4%, 12.9%)',
  'hsl(154, 49.7%, 14.9%)',
  'hsl(154, 50.9%, 17.6%)',
  'hsl(153, 51.8%, 21.8%)',
  'hsl(151, 51.7%, 28.4%)',
  'hsl(151, 49.3%, 46.5%)',
  'hsl(151, 50.0%, 53.2%)',
  'hsl(137, 72.0%, 94.0%)',
  'hsl(30, 70.0%, 7.2%)',
  'hsl(28, 100%, 8.4%)',
  'hsl(26, 91.1%, 11.6%)',
  'hsl(25, 88.3%, 14.1%)',
  'hsl(24, 87.6%, 16.6%)',
  'hsl(24, 88.6%, 19.8%)',
  'hsl(24, 92.4%, 24.0%)',
  'hsl(25, 100%, 29.0%)',
  'hsl(24, 100%, 58.5%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(24, 97.0%, 93.2%)',
  'hsl(318, 25.0%, 9.6%)',
  'hsl(319, 32.2%, 11.6%)',
  'hsl(319, 41.0%, 16.0%)',
  'hsl(320, 45.4%, 18.7%)',
  'hsl(320, 49.0%, 21.1%)',
  'hsl(321, 53.6%, 24.4%)',
  'hsl(321, 61.1%, 29.7%)',
  'hsl(322, 74.9%, 37.5%)',
  'hsl(323, 72.8%, 59.2%)',
  'hsl(325, 90.0%, 66.4%)',
  'hsl(322, 90.0%, 95.8%)',
  'hsl(284, 20.0%, 9.6%)',
  'hsl(283, 30.0%, 11.8%)',
  'hsl(281, 37.5%, 16.5%)',
  'hsl(280, 41.2%, 20.0%)',
  'hsl(279, 43.8%, 23.3%)',
  'hsl(277, 46.4%, 27.5%)',
  'hsl(275, 49.3%, 34.6%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(273, 57.3%, 59.1%)',
  'hsl(275, 80.0%, 71.0%)',
  'hsl(279, 75.0%, 95.7%)',
  'hsl(353, 23.0%, 9.8%)',
  'hsl(357, 34.4%, 12.0%)',
  'hsl(356, 43.4%, 16.4%)',
  'hsl(356, 47.6%, 19.2%)',
  'hsl(356, 51.1%, 21.9%)',
  'hsl(356, 55.2%, 25.9%)',
  'hsl(357, 60.2%, 31.8%)',
  'hsl(358, 65.0%, 40.4%)',
  'hsl(358, 85.3%, 64.0%)',
  'hsl(358, 100%, 69.5%)',
  'hsl(351, 89.0%, 96.0%)',
  'hsl(45, 100%, 5.5%)',
  'hsl(46, 100%, 6.7%)',
  'hsl(45, 100%, 8.7%)',
  'hsl(45, 100%, 10.4%)',
  'hsl(47, 100%, 12.1%)',
  'hsl(49, 100%, 14.3%)',
  'hsl(49, 90.3%, 18.4%)',
  'hsl(50, 100%, 22.0%)',
  'hsl(54, 100%, 68.0%)',
  'hsl(48, 100%, 47.0%)',
  'hsl(53, 100%, 91.0%)',
  'hsl(44, 9.0%, 8.3%)',
  'hsl(43, 14.3%, 9.6%)',
  'hsl(42, 15.5%, 13.0%)',
  'hsl(41, 16.4%, 15.6%)',
  'hsl(41, 16.9%, 17.8%)',
  'hsl(40, 17.6%, 20.8%)',
  'hsl(38, 18.5%, 26.4%)',
  'hsl(36, 19.6%, 35.1%)',
  'hsl(36, 22.3%, 54.5%)',
  'hsl(35, 30.0%, 64.0%)',
  'hsl(49, 52.0%, 93.8%)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(24, 70.0%, 99.0%, 0)',
  'hsla(15, 60.0%, 17.0%, 0)',
  'hsla(60, 54.0%, 98.5%, 0)',
  'hsla(40, 55.0%, 13.5%, 0)',
  'hsla(136, 50.0%, 98.9%, 0)',
  'hsla(155, 40.0%, 14.0%, 0)',
  'hsla(206, 100%, 99.2%, 0)',
  'hsla(211, 100%, 15.0%, 0)',
  'hsla(280, 65.0%, 99.4%, 0)',
  'hsla(272, 66.0%, 16.0%, 0)',
  'hsla(322, 100%, 99.4%, 0)',
  'hsla(320, 70.0%, 13.5%, 0)',
  'hsla(359, 100%, 99.4%, 0)',
  'hsla(354, 50.0%, 14.6%, 0)',
  'hsla(50, 20.0%, 99.1%, 0)',
  'hsla(36, 16.0%, 20.0%, 0)',
  'hsla(30, 70.0%, 7.2%, 0)',
  'hsla(24, 97.0%, 93.2%, 0)',
  'hsla(45, 100%, 5.5%, 0)',
  'hsla(53, 100%, 91.0%, 0)',
  'hsla(146, 30.0%, 7.4%, 0)',
  'hsla(137, 72.0%, 94.0%, 0)',
  'hsla(212, 35.0%, 9.2%, 0)',
  'hsla(206, 98.0%, 95.8%, 0)',
  'hsla(284, 20.0%, 9.6%, 0)',
  'hsla(279, 75.0%, 95.7%, 0)',
  'hsla(318, 25.0%, 9.6%, 0)',
  'hsla(322, 90.0%, 95.8%, 0)',
  'hsla(353, 23.0%, 9.8%, 0)',
  'hsla(351, 89.0%, 96.0%, 0)',
  'hsla(44, 9.0%, 8.3%, 0)',
  'hsla(49, 52.0%, 93.8%, 0)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.9)',
  'transparent',
]

const ks = [
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'backgroundStrong',
'backgroundTransparent',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'borderColor',
'borderColorHover',
'borderColorFocus',
'borderColorPress',
'placeholderColor',
'blue1',
'blue2',
'blue3',
'blue4',
'blue5',
'blue6',
'blue7',
'blue8',
'blue9',
'blue10',
'blue11',
'blue12',
'gray1',
'gray2',
'gray3',
'gray4',
'gray5',
'gray6',
'gray7',
'gray8',
'gray9',
'gray10',
'gray11',
'gray12',
'green1',
'green2',
'green3',
'green4',
'green5',
'green6',
'green7',
'green8',
'green9',
'green10',
'green11',
'green12',
'orange1',
'orange2',
'orange3',
'orange4',
'orange5',
'orange6',
'orange7',
'orange8',
'orange9',
'orange10',
'orange11',
'orange12',
'pink1',
'pink2',
'pink3',
'pink4',
'pink5',
'pink6',
'pink7',
'pink8',
'pink9',
'pink10',
'pink11',
'pink12',
'purple1',
'purple2',
'purple3',
'purple4',
'purple5',
'purple6',
'purple7',
'purple8',
'purple9',
'purple10',
'purple11',
'purple12',
'red1',
'red2',
'red3',
'red4',
'red5',
'red6',
'red7',
'red8',
'red9',
'red10',
'red11',
'red12',
'yellow1',
'yellow2',
'yellow3',
'yellow4',
'yellow5',
'yellow6',
'yellow7',
'yellow8',
'yellow9',
'yellow10',
'yellow11',
'yellow12',
'gold1',
'gold2',
'gold3',
'gold4',
'gold5',
'gold6',
'gold7',
'gold8',
'gold9',
'gold10',
'gold11',
'gold12',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8],[28, 14],[29, 15],[30, 16],[31, 17],[32, 18],[33, 19],[34, 20],[35, 21],[36, 22],[37, 23],[38, 24],[39, 25],[40, 26],[41, 2],[42, 3],[43, 27],[44, 28],[45, 29],[46, 30],[47, 31],[48, 8],[49, 32],[50, 33],[51, 11],[52, 34],[53, 35],[54, 36],[55, 37],[56, 38],[57, 39],[58, 40],[59, 41],[60, 42],[61, 43],[62, 44],[63, 45],[64, 46],[65, 47],[66, 48],[67, 49],[68, 50],[69, 51],[70, 52],[71, 53],[72, 54],[73, 55],[74, 56],[75, 57],[76, 58],[77, 59],[78, 60],[79, 61],[80, 62],[81, 63],[82, 64],[83, 65],[84, 66],[85, 67],[86, 68],[87, 69],[88, 70],[89, 71],[90, 72],[91, 73],[92, 74],[93, 75],[94, 76],[95, 77],[96, 78],[97, 79],[98, 80],[99, 81],[100, 82],[101, 83],[102, 84],[103, 85],[104, 86],[105, 87],[106, 88],[107, 89],[108, 90],[109, 91],[110, 92],[111, 93],[112, 94],[113, 95],[114, 96],[115, 97],[116, 98],[117, 99],[118, 100],[119, 101],[120, 102],[121, 103],[122, 104],[123, 105],[124, 106],[125, 107],[126, 108],[127, 109],[128, 110],[129, 111],[130, 112],[131, 113],[132, 114],[133, 115],[134, 116],[135, 117],[136, 118],[137, 118],[138, 119],[139, 119]]) as Theme

export const light = n1 as Theme
const n2 = t([[0, 120],[1, 121],[2, 122],[3, 123],[4, 124],[5, 125],[6, 126],[7, 127],[8, 128],[9, 129],[10, 130],[11, 0],[12, 121],[13, 122],[14, 123],[15, 124],[16, 120],[17, 13],[18, 0],[19, 130],[20, 0],[21, 130],[22, 12],[23, 124],[24, 125],[25, 123],[26, 124],[27, 128],[28, 131],[29, 132],[30, 133],[31, 134],[32, 135],[33, 136],[34, 137],[35, 138],[36, 22],[37, 139],[38, 140],[39, 141],[40, 142],[41, 143],[42, 144],[43, 145],[44, 146],[45, 147],[46, 148],[47, 149],[48, 150],[49, 151],[50, 152],[51, 27],[52, 153],[53, 154],[54, 155],[55, 156],[56, 157],[57, 158],[58, 159],[59, 160],[60, 42],[61, 161],[62, 162],[63, 163],[64, 164],[65, 165],[66, 166],[67, 167],[68, 168],[69, 169],[70, 170],[71, 171],[72, 54],[73, 172],[74, 173],[75, 174],[76, 175],[77, 176],[78, 177],[79, 178],[80, 179],[81, 180],[82, 181],[83, 182],[84, 66],[85, 183],[86, 184],[87, 185],[88, 186],[89, 187],[90, 188],[91, 189],[92, 190],[93, 191],[94, 192],[95, 193],[96, 78],[97, 194],[98, 195],[99, 196],[100, 197],[101, 198],[102, 199],[103, 200],[104, 201],[105, 202],[106, 203],[107, 204],[108, 90],[109, 205],[110, 206],[111, 207],[112, 208],[113, 209],[114, 210],[115, 211],[116, 212],[117, 213],[118, 214],[119, 215],[120, 102],[121, 216],[122, 217],[123, 218],[124, 219],[125, 220],[126, 221],[127, 222],[128, 223],[129, 224],[130, 225],[131, 226],[132, 114],[133, 227],[134, 228],[135, 229],[136, 230],[137, 230],[138, 231],[139, 231]]) as Theme

export const dark = n2 as Theme
const n3 = t([[0, 46],[1, 47],[2, 48],[3, 49],[4, 50],[5, 51],[6, 53],[7, 54],[8, 55],[9, 56],[10, 57],[11, 11],[12, 47],[13, 48],[14, 49],[15, 50],[16, 46],[17, 232],[18, 11],[19, 57],[20, 11],[21, 57],[22, 233],[23, 49],[24, 50],[25, 49],[26, 49],[27, 55]]) as Theme

export const light_orange = n3 as Theme
const n4 = t([[0, 94],[1, 95],[2, 96],[3, 97],[4, 98],[5, 99],[6, 101],[7, 102],[8, 103],[9, 104],[10, 105],[11, 11],[12, 95],[13, 96],[14, 97],[15, 98],[16, 94],[17, 234],[18, 11],[19, 105],[20, 11],[21, 105],[22, 235],[23, 97],[24, 98],[25, 97],[26, 97],[27, 103]]) as Theme

export const light_yellow = n4 as Theme
const n5 = t([[0, 34],[1, 35],[2, 36],[3, 37],[4, 38],[5, 39],[6, 41],[7, 42],[8, 43],[9, 44],[10, 45],[11, 11],[12, 35],[13, 36],[14, 37],[15, 38],[16, 34],[17, 236],[18, 11],[19, 45],[20, 11],[21, 45],[22, 237],[23, 37],[24, 38],[25, 37],[26, 37],[27, 43]]) as Theme

export const light_green = n5 as Theme
const n6 = t([[0, 14],[1, 15],[2, 16],[3, 17],[4, 18],[5, 19],[6, 21],[7, 22],[8, 23],[9, 24],[10, 25],[11, 11],[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 238],[18, 11],[19, 25],[20, 11],[21, 25],[22, 239],[23, 17],[24, 18],[25, 17],[26, 17],[27, 23]]) as Theme

export const light_blue = n6 as Theme
const n7 = t([[0, 70],[1, 71],[2, 72],[3, 73],[4, 74],[5, 75],[6, 77],[7, 78],[8, 79],[9, 80],[10, 81],[11, 11],[12, 71],[13, 72],[14, 73],[15, 74],[16, 70],[17, 240],[18, 11],[19, 81],[20, 11],[21, 81],[22, 241],[23, 73],[24, 74],[25, 73],[26, 73],[27, 79]]) as Theme

export const light_purple = n7 as Theme
const n8 = t([[0, 58],[1, 59],[2, 60],[3, 61],[4, 62],[5, 63],[6, 65],[7, 66],[8, 67],[9, 68],[10, 69],[11, 11],[12, 59],[13, 60],[14, 61],[15, 62],[16, 58],[17, 242],[18, 11],[19, 69],[20, 11],[21, 69],[22, 243],[23, 61],[24, 62],[25, 61],[26, 61],[27, 67]]) as Theme

export const light_pink = n8 as Theme
const n9 = t([[0, 82],[1, 83],[2, 84],[3, 85],[4, 86],[5, 87],[6, 89],[7, 90],[8, 91],[9, 92],[10, 93],[11, 11],[12, 83],[13, 84],[14, 85],[15, 86],[16, 82],[17, 244],[18, 11],[19, 93],[20, 11],[21, 93],[22, 245],[23, 85],[24, 86],[25, 85],[26, 85],[27, 91]]) as Theme

export const light_red = n9 as Theme
const n10 = t([[0, 106],[1, 107],[2, 108],[3, 109],[4, 110],[5, 111],[6, 113],[7, 114],[8, 115],[9, 116],[10, 117],[11, 11],[12, 107],[13, 108],[14, 109],[15, 110],[16, 106],[17, 246],[18, 11],[19, 117],[20, 11],[21, 117],[22, 247],[23, 109],[24, 110],[25, 109],[26, 109],[27, 115]]) as Theme

export const light_gold = n10 as Theme
const n11 = t([[0, 164],[1, 165],[2, 166],[3, 167],[4, 168],[5, 169],[6, 171],[7, 54],[8, 172],[9, 173],[10, 174],[11, 0],[12, 165],[13, 166],[14, 167],[15, 168],[16, 164],[17, 248],[18, 0],[19, 174],[20, 0],[21, 174],[22, 249],[23, 168],[24, 169],[25, 167],[26, 168],[27, 172]]) as Theme

export const dark_orange = n11 as Theme
const n12 = t([[0, 208],[1, 209],[2, 210],[3, 211],[4, 212],[5, 213],[6, 215],[7, 102],[8, 216],[9, 217],[10, 218],[11, 0],[12, 209],[13, 210],[14, 211],[15, 212],[16, 208],[17, 250],[18, 0],[19, 218],[20, 0],[21, 218],[22, 251],[23, 212],[24, 213],[25, 211],[26, 212],[27, 216]]) as Theme

export const dark_yellow = n12 as Theme
const n13 = t([[0, 153],[1, 154],[2, 155],[3, 156],[4, 157],[5, 158],[6, 160],[7, 42],[8, 161],[9, 162],[10, 163],[11, 0],[12, 154],[13, 155],[14, 156],[15, 157],[16, 153],[17, 252],[18, 0],[19, 163],[20, 0],[21, 163],[22, 253],[23, 157],[24, 158],[25, 156],[26, 157],[27, 161]]) as Theme

export const dark_green = n13 as Theme
const n14 = t([[0, 131],[1, 132],[2, 133],[3, 134],[4, 135],[5, 136],[6, 138],[7, 22],[8, 139],[9, 140],[10, 141],[11, 0],[12, 132],[13, 133],[14, 134],[15, 135],[16, 131],[17, 254],[18, 0],[19, 141],[20, 0],[21, 141],[22, 255],[23, 135],[24, 136],[25, 134],[26, 135],[27, 139]]) as Theme

export const dark_blue = n14 as Theme
const n15 = t([[0, 186],[1, 187],[2, 188],[3, 189],[4, 190],[5, 191],[6, 193],[7, 78],[8, 194],[9, 195],[10, 196],[11, 0],[12, 187],[13, 188],[14, 189],[15, 190],[16, 186],[17, 256],[18, 0],[19, 196],[20, 0],[21, 196],[22, 257],[23, 190],[24, 191],[25, 189],[26, 190],[27, 194]]) as Theme

export const dark_purple = n15 as Theme
const n16 = t([[0, 175],[1, 176],[2, 177],[3, 178],[4, 179],[5, 180],[6, 182],[7, 66],[8, 183],[9, 184],[10, 185],[11, 0],[12, 176],[13, 177],[14, 178],[15, 179],[16, 175],[17, 258],[18, 0],[19, 185],[20, 0],[21, 185],[22, 259],[23, 179],[24, 180],[25, 178],[26, 179],[27, 183]]) as Theme

export const dark_pink = n16 as Theme
const n17 = t([[0, 197],[1, 198],[2, 199],[3, 200],[4, 201],[5, 202],[6, 204],[7, 90],[8, 205],[9, 206],[10, 207],[11, 0],[12, 198],[13, 199],[14, 200],[15, 201],[16, 197],[17, 260],[18, 0],[19, 207],[20, 0],[21, 207],[22, 261],[23, 201],[24, 202],[25, 200],[26, 201],[27, 205]]) as Theme

export const dark_red = n17 as Theme
const n18 = t([[0, 219],[1, 220],[2, 221],[3, 222],[4, 223],[5, 224],[6, 226],[7, 114],[8, 227],[9, 228],[10, 229],[11, 0],[12, 220],[13, 221],[14, 222],[15, 223],[16, 219],[17, 262],[18, 0],[19, 229],[20, 0],[21, 229],[22, 263],[23, 223],[24, 224],[25, 222],[26, 223],[27, 227]]) as Theme

export const dark_gold = n18 as Theme
const n19 = t([[12, 264]]) as Theme

export const light_SheetOverlay = n19 as Theme
export const light_DialogOverlay = n19 as Theme
export const light_ModalOverlay = n19 as Theme
export const light_orange_SheetOverlay = n19 as Theme
export const light_orange_DialogOverlay = n19 as Theme
export const light_orange_ModalOverlay = n19 as Theme
export const light_yellow_SheetOverlay = n19 as Theme
export const light_yellow_DialogOverlay = n19 as Theme
export const light_yellow_ModalOverlay = n19 as Theme
export const light_green_SheetOverlay = n19 as Theme
export const light_green_DialogOverlay = n19 as Theme
export const light_green_ModalOverlay = n19 as Theme
export const light_blue_SheetOverlay = n19 as Theme
export const light_blue_DialogOverlay = n19 as Theme
export const light_blue_ModalOverlay = n19 as Theme
export const light_purple_SheetOverlay = n19 as Theme
export const light_purple_DialogOverlay = n19 as Theme
export const light_purple_ModalOverlay = n19 as Theme
export const light_pink_SheetOverlay = n19 as Theme
export const light_pink_DialogOverlay = n19 as Theme
export const light_pink_ModalOverlay = n19 as Theme
export const light_red_SheetOverlay = n19 as Theme
export const light_red_DialogOverlay = n19 as Theme
export const light_red_ModalOverlay = n19 as Theme
export const light_gold_SheetOverlay = n19 as Theme
export const light_gold_DialogOverlay = n19 as Theme
export const light_gold_ModalOverlay = n19 as Theme
export const light_alt1_SheetOverlay = n19 as Theme
export const light_alt1_DialogOverlay = n19 as Theme
export const light_alt1_ModalOverlay = n19 as Theme
export const light_alt2_SheetOverlay = n19 as Theme
export const light_alt2_DialogOverlay = n19 as Theme
export const light_alt2_ModalOverlay = n19 as Theme
export const light_active_SheetOverlay = n19 as Theme
export const light_active_DialogOverlay = n19 as Theme
export const light_active_ModalOverlay = n19 as Theme
export const light_orange_alt1_SheetOverlay = n19 as Theme
export const light_orange_alt1_DialogOverlay = n19 as Theme
export const light_orange_alt1_ModalOverlay = n19 as Theme
export const light_orange_alt2_SheetOverlay = n19 as Theme
export const light_orange_alt2_DialogOverlay = n19 as Theme
export const light_orange_alt2_ModalOverlay = n19 as Theme
export const light_orange_active_SheetOverlay = n19 as Theme
export const light_orange_active_DialogOverlay = n19 as Theme
export const light_orange_active_ModalOverlay = n19 as Theme
export const light_yellow_alt1_SheetOverlay = n19 as Theme
export const light_yellow_alt1_DialogOverlay = n19 as Theme
export const light_yellow_alt1_ModalOverlay = n19 as Theme
export const light_yellow_alt2_SheetOverlay = n19 as Theme
export const light_yellow_alt2_DialogOverlay = n19 as Theme
export const light_yellow_alt2_ModalOverlay = n19 as Theme
export const light_yellow_active_SheetOverlay = n19 as Theme
export const light_yellow_active_DialogOverlay = n19 as Theme
export const light_yellow_active_ModalOverlay = n19 as Theme
export const light_green_alt1_SheetOverlay = n19 as Theme
export const light_green_alt1_DialogOverlay = n19 as Theme
export const light_green_alt1_ModalOverlay = n19 as Theme
export const light_green_alt2_SheetOverlay = n19 as Theme
export const light_green_alt2_DialogOverlay = n19 as Theme
export const light_green_alt2_ModalOverlay = n19 as Theme
export const light_green_active_SheetOverlay = n19 as Theme
export const light_green_active_DialogOverlay = n19 as Theme
export const light_green_active_ModalOverlay = n19 as Theme
export const light_blue_alt1_SheetOverlay = n19 as Theme
export const light_blue_alt1_DialogOverlay = n19 as Theme
export const light_blue_alt1_ModalOverlay = n19 as Theme
export const light_blue_alt2_SheetOverlay = n19 as Theme
export const light_blue_alt2_DialogOverlay = n19 as Theme
export const light_blue_alt2_ModalOverlay = n19 as Theme
export const light_blue_active_SheetOverlay = n19 as Theme
export const light_blue_active_DialogOverlay = n19 as Theme
export const light_blue_active_ModalOverlay = n19 as Theme
export const light_purple_alt1_SheetOverlay = n19 as Theme
export const light_purple_alt1_DialogOverlay = n19 as Theme
export const light_purple_alt1_ModalOverlay = n19 as Theme
export const light_purple_alt2_SheetOverlay = n19 as Theme
export const light_purple_alt2_DialogOverlay = n19 as Theme
export const light_purple_alt2_ModalOverlay = n19 as Theme
export const light_purple_active_SheetOverlay = n19 as Theme
export const light_purple_active_DialogOverlay = n19 as Theme
export const light_purple_active_ModalOverlay = n19 as Theme
export const light_pink_alt1_SheetOverlay = n19 as Theme
export const light_pink_alt1_DialogOverlay = n19 as Theme
export const light_pink_alt1_ModalOverlay = n19 as Theme
export const light_pink_alt2_SheetOverlay = n19 as Theme
export const light_pink_alt2_DialogOverlay = n19 as Theme
export const light_pink_alt2_ModalOverlay = n19 as Theme
export const light_pink_active_SheetOverlay = n19 as Theme
export const light_pink_active_DialogOverlay = n19 as Theme
export const light_pink_active_ModalOverlay = n19 as Theme
export const light_red_alt1_SheetOverlay = n19 as Theme
export const light_red_alt1_DialogOverlay = n19 as Theme
export const light_red_alt1_ModalOverlay = n19 as Theme
export const light_red_alt2_SheetOverlay = n19 as Theme
export const light_red_alt2_DialogOverlay = n19 as Theme
export const light_red_alt2_ModalOverlay = n19 as Theme
export const light_red_active_SheetOverlay = n19 as Theme
export const light_red_active_DialogOverlay = n19 as Theme
export const light_red_active_ModalOverlay = n19 as Theme
export const light_gold_alt1_SheetOverlay = n19 as Theme
export const light_gold_alt1_DialogOverlay = n19 as Theme
export const light_gold_alt1_ModalOverlay = n19 as Theme
export const light_gold_alt2_SheetOverlay = n19 as Theme
export const light_gold_alt2_DialogOverlay = n19 as Theme
export const light_gold_alt2_ModalOverlay = n19 as Theme
export const light_gold_active_SheetOverlay = n19 as Theme
export const light_gold_active_DialogOverlay = n19 as Theme
export const light_gold_active_ModalOverlay = n19 as Theme
const n20 = t([[12, 265]]) as Theme

export const dark_SheetOverlay = n20 as Theme
export const dark_DialogOverlay = n20 as Theme
export const dark_ModalOverlay = n20 as Theme
export const dark_orange_SheetOverlay = n20 as Theme
export const dark_orange_DialogOverlay = n20 as Theme
export const dark_orange_ModalOverlay = n20 as Theme
export const dark_yellow_SheetOverlay = n20 as Theme
export const dark_yellow_DialogOverlay = n20 as Theme
export const dark_yellow_ModalOverlay = n20 as Theme
export const dark_green_SheetOverlay = n20 as Theme
export const dark_green_DialogOverlay = n20 as Theme
export const dark_green_ModalOverlay = n20 as Theme
export const dark_blue_SheetOverlay = n20 as Theme
export const dark_blue_DialogOverlay = n20 as Theme
export const dark_blue_ModalOverlay = n20 as Theme
export const dark_purple_SheetOverlay = n20 as Theme
export const dark_purple_DialogOverlay = n20 as Theme
export const dark_purple_ModalOverlay = n20 as Theme
export const dark_pink_SheetOverlay = n20 as Theme
export const dark_pink_DialogOverlay = n20 as Theme
export const dark_pink_ModalOverlay = n20 as Theme
export const dark_red_SheetOverlay = n20 as Theme
export const dark_red_DialogOverlay = n20 as Theme
export const dark_red_ModalOverlay = n20 as Theme
export const dark_gold_SheetOverlay = n20 as Theme
export const dark_gold_DialogOverlay = n20 as Theme
export const dark_gold_ModalOverlay = n20 as Theme
export const dark_alt1_SheetOverlay = n20 as Theme
export const dark_alt1_DialogOverlay = n20 as Theme
export const dark_alt1_ModalOverlay = n20 as Theme
export const dark_alt2_SheetOverlay = n20 as Theme
export const dark_alt2_DialogOverlay = n20 as Theme
export const dark_alt2_ModalOverlay = n20 as Theme
export const dark_active_SheetOverlay = n20 as Theme
export const dark_active_DialogOverlay = n20 as Theme
export const dark_active_ModalOverlay = n20 as Theme
export const dark_orange_alt1_SheetOverlay = n20 as Theme
export const dark_orange_alt1_DialogOverlay = n20 as Theme
export const dark_orange_alt1_ModalOverlay = n20 as Theme
export const dark_orange_alt2_SheetOverlay = n20 as Theme
export const dark_orange_alt2_DialogOverlay = n20 as Theme
export const dark_orange_alt2_ModalOverlay = n20 as Theme
export const dark_orange_active_SheetOverlay = n20 as Theme
export const dark_orange_active_DialogOverlay = n20 as Theme
export const dark_orange_active_ModalOverlay = n20 as Theme
export const dark_yellow_alt1_SheetOverlay = n20 as Theme
export const dark_yellow_alt1_DialogOverlay = n20 as Theme
export const dark_yellow_alt1_ModalOverlay = n20 as Theme
export const dark_yellow_alt2_SheetOverlay = n20 as Theme
export const dark_yellow_alt2_DialogOverlay = n20 as Theme
export const dark_yellow_alt2_ModalOverlay = n20 as Theme
export const dark_yellow_active_SheetOverlay = n20 as Theme
export const dark_yellow_active_DialogOverlay = n20 as Theme
export const dark_yellow_active_ModalOverlay = n20 as Theme
export const dark_green_alt1_SheetOverlay = n20 as Theme
export const dark_green_alt1_DialogOverlay = n20 as Theme
export const dark_green_alt1_ModalOverlay = n20 as Theme
export const dark_green_alt2_SheetOverlay = n20 as Theme
export const dark_green_alt2_DialogOverlay = n20 as Theme
export const dark_green_alt2_ModalOverlay = n20 as Theme
export const dark_green_active_SheetOverlay = n20 as Theme
export const dark_green_active_DialogOverlay = n20 as Theme
export const dark_green_active_ModalOverlay = n20 as Theme
export const dark_blue_alt1_SheetOverlay = n20 as Theme
export const dark_blue_alt1_DialogOverlay = n20 as Theme
export const dark_blue_alt1_ModalOverlay = n20 as Theme
export const dark_blue_alt2_SheetOverlay = n20 as Theme
export const dark_blue_alt2_DialogOverlay = n20 as Theme
export const dark_blue_alt2_ModalOverlay = n20 as Theme
export const dark_blue_active_SheetOverlay = n20 as Theme
export const dark_blue_active_DialogOverlay = n20 as Theme
export const dark_blue_active_ModalOverlay = n20 as Theme
export const dark_purple_alt1_SheetOverlay = n20 as Theme
export const dark_purple_alt1_DialogOverlay = n20 as Theme
export const dark_purple_alt1_ModalOverlay = n20 as Theme
export const dark_purple_alt2_SheetOverlay = n20 as Theme
export const dark_purple_alt2_DialogOverlay = n20 as Theme
export const dark_purple_alt2_ModalOverlay = n20 as Theme
export const dark_purple_active_SheetOverlay = n20 as Theme
export const dark_purple_active_DialogOverlay = n20 as Theme
export const dark_purple_active_ModalOverlay = n20 as Theme
export const dark_pink_alt1_SheetOverlay = n20 as Theme
export const dark_pink_alt1_DialogOverlay = n20 as Theme
export const dark_pink_alt1_ModalOverlay = n20 as Theme
export const dark_pink_alt2_SheetOverlay = n20 as Theme
export const dark_pink_alt2_DialogOverlay = n20 as Theme
export const dark_pink_alt2_ModalOverlay = n20 as Theme
export const dark_pink_active_SheetOverlay = n20 as Theme
export const dark_pink_active_DialogOverlay = n20 as Theme
export const dark_pink_active_ModalOverlay = n20 as Theme
export const dark_red_alt1_SheetOverlay = n20 as Theme
export const dark_red_alt1_DialogOverlay = n20 as Theme
export const dark_red_alt1_ModalOverlay = n20 as Theme
export const dark_red_alt2_SheetOverlay = n20 as Theme
export const dark_red_alt2_DialogOverlay = n20 as Theme
export const dark_red_alt2_ModalOverlay = n20 as Theme
export const dark_red_active_SheetOverlay = n20 as Theme
export const dark_red_active_DialogOverlay = n20 as Theme
export const dark_red_active_ModalOverlay = n20 as Theme
export const dark_gold_alt1_SheetOverlay = n20 as Theme
export const dark_gold_alt1_DialogOverlay = n20 as Theme
export const dark_gold_alt1_ModalOverlay = n20 as Theme
export const dark_gold_alt2_SheetOverlay = n20 as Theme
export const dark_gold_alt2_DialogOverlay = n20 as Theme
export const dark_gold_alt2_ModalOverlay = n20 as Theme
export const dark_gold_active_SheetOverlay = n20 as Theme
export const dark_gold_active_DialogOverlay = n20 as Theme
export const dark_gold_active_ModalOverlay = n20 as Theme
const n21 = t([[0, 1],[1, 2],[2, 3],[3, 4],[4, 5],[5, 6],[6, 7],[7, 8],[8, 9],[9, 10],[10, 11],[11, 11],[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_alt1 = n21 as Theme
const n22 = t([[0, 2],[1, 3],[2, 4],[3, 5],[4, 6],[5, 7],[6, 8],[7, 9],[8, 10],[9, 11],[10, 11],[11, 11],[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_alt2 = n22 as Theme
const n23 = t([[0, 3],[1, 4],[2, 5],[3, 6],[4, 7],[5, 8],[6, 9],[7, 10],[8, 11],[9, 13],[10, 13],[11, 13],[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_active = n23 as Theme
const n24 = t([[0, 121],[1, 122],[2, 123],[3, 124],[4, 125],[5, 126],[6, 127],[7, 128],[8, 129],[9, 130],[10, 0],[11, 0],[12, 122],[13, 123],[14, 124],[15, 125],[16, 121],[17, 120],[18, 130],[19, 129],[20, 130],[21, 129],[22, 0],[23, 125],[24, 126],[25, 124],[26, 125],[27, 127]]) as Theme

export const dark_alt1 = n24 as Theme
const n25 = t([[0, 122],[1, 123],[2, 124],[3, 125],[4, 126],[5, 127],[6, 128],[7, 129],[8, 130],[9, 0],[10, 0],[11, 0],[12, 123],[13, 124],[14, 125],[15, 126],[16, 122],[17, 121],[18, 129],[19, 128],[20, 129],[21, 128],[22, 130],[23, 126],[24, 127],[25, 125],[26, 126],[27, 126]]) as Theme

export const dark_alt2 = n25 as Theme
const n26 = t([[0, 123],[1, 124],[2, 125],[3, 126],[4, 127],[5, 128],[6, 129],[7, 130],[8, 0],[9, 12],[10, 12],[11, 12],[12, 124],[13, 125],[14, 126],[15, 127],[16, 123],[17, 122],[19, 127],[20, 128],[21, 127],[22, 129],[23, 127],[24, 128],[25, 126],[26, 127],[27, 125]]) as Theme

export const dark_active = n26 as Theme
const n27 = t([[0, 47],[1, 48],[2, 49],[3, 50],[4, 51],[5, 53],[6, 54],[7, 55],[8, 56],[9, 57],[10, 11],[11, 11],[12, 48],[13, 49],[14, 50],[15, 51],[16, 47],[17, 46],[18, 57],[19, 56],[20, 57],[21, 56],[22, 11],[23, 50],[24, 51],[25, 50],[26, 50],[27, 54]]) as Theme

export const light_orange_alt1 = n27 as Theme
const n28 = t([[0, 48],[1, 49],[2, 50],[3, 51],[4, 53],[5, 54],[6, 55],[7, 56],[8, 57],[9, 11],[10, 11],[11, 11],[12, 49],[13, 50],[14, 51],[15, 53],[16, 48],[17, 47],[18, 56],[19, 55],[20, 56],[21, 55],[22, 57],[23, 51],[24, 53],[25, 51],[26, 51],[27, 53]]) as Theme

export const light_orange_alt2 = n28 as Theme
const n29 = t([[0, 49],[1, 50],[2, 51],[3, 53],[4, 54],[5, 55],[6, 56],[7, 57],[8, 11],[9, 233],[10, 233],[11, 233],[12, 50],[13, 51],[14, 53],[15, 54],[16, 49],[17, 48],[19, 54],[20, 55],[21, 54],[22, 56],[23, 53],[24, 54],[25, 53],[26, 53],[27, 51]]) as Theme

export const light_orange_active = n29 as Theme
const n30 = t([[0, 95],[1, 96],[2, 97],[3, 98],[4, 99],[5, 101],[6, 102],[7, 103],[8, 104],[9, 105],[10, 11],[11, 11],[12, 96],[13, 97],[14, 98],[15, 99],[16, 95],[17, 94],[18, 105],[19, 104],[20, 105],[21, 104],[22, 11],[23, 98],[24, 99],[25, 98],[26, 98],[27, 102]]) as Theme

export const light_yellow_alt1 = n30 as Theme
const n31 = t([[0, 96],[1, 97],[2, 98],[3, 99],[4, 101],[5, 102],[6, 103],[7, 104],[8, 105],[9, 11],[10, 11],[11, 11],[12, 97],[13, 98],[14, 99],[15, 101],[16, 96],[17, 95],[18, 104],[19, 103],[20, 104],[21, 103],[22, 105],[23, 99],[24, 101],[25, 99],[26, 99],[27, 101]]) as Theme

export const light_yellow_alt2 = n31 as Theme
const n32 = t([[0, 97],[1, 98],[2, 99],[3, 101],[4, 102],[5, 103],[6, 104],[7, 105],[8, 11],[9, 235],[10, 235],[11, 235],[12, 98],[13, 99],[14, 101],[15, 102],[16, 97],[17, 96],[19, 102],[20, 103],[21, 102],[22, 104],[23, 101],[24, 102],[25, 101],[26, 101],[27, 99]]) as Theme

export const light_yellow_active = n32 as Theme
const n33 = t([[0, 35],[1, 36],[2, 37],[3, 38],[4, 39],[5, 41],[6, 42],[7, 43],[8, 44],[9, 45],[10, 11],[11, 11],[12, 36],[13, 37],[14, 38],[15, 39],[16, 35],[17, 34],[18, 45],[19, 44],[20, 45],[21, 44],[22, 11],[23, 38],[24, 39],[25, 38],[26, 38],[27, 42]]) as Theme

export const light_green_alt1 = n33 as Theme
const n34 = t([[0, 36],[1, 37],[2, 38],[3, 39],[4, 41],[5, 42],[6, 43],[7, 44],[8, 45],[9, 11],[10, 11],[11, 11],[12, 37],[13, 38],[14, 39],[15, 41],[16, 36],[17, 35],[18, 44],[19, 43],[20, 44],[21, 43],[22, 45],[23, 39],[24, 41],[25, 39],[26, 39],[27, 41]]) as Theme

export const light_green_alt2 = n34 as Theme
const n35 = t([[0, 37],[1, 38],[2, 39],[3, 41],[4, 42],[5, 43],[6, 44],[7, 45],[8, 11],[9, 237],[10, 237],[11, 237],[12, 38],[13, 39],[14, 41],[15, 42],[16, 37],[17, 36],[19, 42],[20, 43],[21, 42],[22, 44],[23, 41],[24, 42],[25, 41],[26, 41],[27, 39]]) as Theme

export const light_green_active = n35 as Theme
const n36 = t([[0, 15],[1, 16],[2, 17],[3, 18],[4, 19],[5, 21],[6, 22],[7, 23],[8, 24],[9, 25],[10, 11],[11, 11],[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 22]]) as Theme

export const light_blue_alt1 = n36 as Theme
const n37 = t([[0, 16],[1, 17],[2, 18],[3, 19],[4, 21],[5, 22],[6, 23],[7, 24],[8, 25],[9, 11],[10, 11],[11, 11],[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 24],[19, 23],[20, 24],[21, 23],[22, 25],[23, 19],[24, 21],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_alt2 = n37 as Theme
const n38 = t([[0, 17],[1, 18],[2, 19],[3, 21],[4, 22],[5, 23],[6, 24],[7, 25],[8, 11],[9, 239],[10, 239],[11, 239],[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[19, 22],[20, 23],[21, 22],[22, 24],[23, 21],[24, 22],[25, 21],[26, 21],[27, 19]]) as Theme

export const light_blue_active = n38 as Theme
const n39 = t([[0, 71],[1, 72],[2, 73],[3, 74],[4, 75],[5, 77],[6, 78],[7, 79],[8, 80],[9, 81],[10, 11],[11, 11],[12, 72],[13, 73],[14, 74],[15, 75],[16, 71],[17, 70],[18, 81],[19, 80],[20, 81],[21, 80],[22, 11],[23, 74],[24, 75],[25, 74],[26, 74],[27, 78]]) as Theme

export const light_purple_alt1 = n39 as Theme
const n40 = t([[0, 72],[1, 73],[2, 74],[3, 75],[4, 77],[5, 78],[6, 79],[7, 80],[8, 81],[9, 11],[10, 11],[11, 11],[12, 73],[13, 74],[14, 75],[15, 77],[16, 72],[17, 71],[18, 80],[19, 79],[20, 80],[21, 79],[22, 81],[23, 75],[24, 77],[25, 75],[26, 75],[27, 77]]) as Theme

export const light_purple_alt2 = n40 as Theme
const n41 = t([[0, 73],[1, 74],[2, 75],[3, 77],[4, 78],[5, 79],[6, 80],[7, 81],[8, 11],[9, 241],[10, 241],[11, 241],[12, 74],[13, 75],[14, 77],[15, 78],[16, 73],[17, 72],[19, 78],[20, 79],[21, 78],[22, 80],[23, 77],[24, 78],[25, 77],[26, 77],[27, 75]]) as Theme

export const light_purple_active = n41 as Theme
const n42 = t([[0, 59],[1, 60],[2, 61],[3, 62],[4, 63],[5, 65],[6, 66],[7, 67],[8, 68],[9, 69],[10, 11],[11, 11],[12, 60],[13, 61],[14, 62],[15, 63],[16, 59],[17, 58],[18, 69],[19, 68],[20, 69],[21, 68],[22, 11],[23, 62],[24, 63],[25, 62],[26, 62],[27, 66]]) as Theme

export const light_pink_alt1 = n42 as Theme
const n43 = t([[0, 60],[1, 61],[2, 62],[3, 63],[4, 65],[5, 66],[6, 67],[7, 68],[8, 69],[9, 11],[10, 11],[11, 11],[12, 61],[13, 62],[14, 63],[15, 65],[16, 60],[17, 59],[18, 68],[19, 67],[20, 68],[21, 67],[22, 69],[23, 63],[24, 65],[25, 63],[26, 63],[27, 65]]) as Theme

export const light_pink_alt2 = n43 as Theme
const n44 = t([[0, 61],[1, 62],[2, 63],[3, 65],[4, 66],[5, 67],[6, 68],[7, 69],[8, 11],[9, 243],[10, 243],[11, 243],[12, 62],[13, 63],[14, 65],[15, 66],[16, 61],[17, 60],[19, 66],[20, 67],[21, 66],[22, 68],[23, 65],[24, 66],[25, 65],[26, 65],[27, 63]]) as Theme

export const light_pink_active = n44 as Theme
const n45 = t([[0, 83],[1, 84],[2, 85],[3, 86],[4, 87],[5, 89],[6, 90],[7, 91],[8, 92],[9, 93],[10, 11],[11, 11],[12, 84],[13, 85],[14, 86],[15, 87],[16, 83],[17, 82],[18, 93],[19, 92],[20, 93],[21, 92],[22, 11],[23, 86],[24, 87],[25, 86],[26, 86],[27, 90]]) as Theme

export const light_red_alt1 = n45 as Theme
const n46 = t([[0, 84],[1, 85],[2, 86],[3, 87],[4, 89],[5, 90],[6, 91],[7, 92],[8, 93],[9, 11],[10, 11],[11, 11],[12, 85],[13, 86],[14, 87],[15, 89],[16, 84],[17, 83],[18, 92],[19, 91],[20, 92],[21, 91],[22, 93],[23, 87],[24, 89],[25, 87],[26, 87],[27, 89]]) as Theme

export const light_red_alt2 = n46 as Theme
const n47 = t([[0, 85],[1, 86],[2, 87],[3, 89],[4, 90],[5, 91],[6, 92],[7, 93],[8, 11],[9, 245],[10, 245],[11, 245],[12, 86],[13, 87],[14, 89],[15, 90],[16, 85],[17, 84],[19, 90],[20, 91],[21, 90],[22, 92],[23, 89],[24, 90],[25, 89],[26, 89],[27, 87]]) as Theme

export const light_red_active = n47 as Theme
const n48 = t([[0, 107],[1, 108],[2, 109],[3, 110],[4, 111],[5, 113],[6, 114],[7, 115],[8, 116],[9, 117],[10, 11],[11, 11],[12, 108],[13, 109],[14, 110],[15, 111],[16, 107],[17, 106],[18, 117],[19, 116],[20, 117],[21, 116],[22, 11],[23, 110],[24, 111],[25, 110],[26, 110],[27, 114]]) as Theme

export const light_gold_alt1 = n48 as Theme
const n49 = t([[0, 108],[1, 109],[2, 110],[3, 111],[4, 113],[5, 114],[6, 115],[7, 116],[8, 117],[9, 11],[10, 11],[11, 11],[12, 109],[13, 110],[14, 111],[15, 113],[16, 108],[17, 107],[18, 116],[19, 115],[20, 116],[21, 115],[22, 117],[23, 111],[24, 113],[25, 111],[26, 111],[27, 113]]) as Theme

export const light_gold_alt2 = n49 as Theme
const n50 = t([[0, 109],[1, 110],[2, 111],[3, 113],[4, 114],[5, 115],[6, 116],[7, 117],[8, 11],[9, 247],[10, 247],[11, 247],[12, 110],[13, 111],[14, 113],[15, 114],[16, 109],[17, 108],[19, 114],[20, 115],[21, 114],[22, 116],[23, 113],[24, 114],[25, 113],[26, 113],[27, 111]]) as Theme

export const light_gold_active = n50 as Theme
const n51 = t([[0, 165],[1, 166],[2, 167],[3, 168],[4, 169],[5, 171],[6, 54],[7, 172],[8, 173],[9, 174],[10, 0],[11, 0],[12, 166],[13, 167],[14, 168],[15, 169],[16, 165],[17, 164],[18, 174],[19, 173],[20, 174],[21, 173],[22, 0],[23, 169],[24, 171],[25, 168],[26, 169],[27, 54]]) as Theme

export const dark_orange_alt1 = n51 as Theme
const n52 = t([[0, 166],[1, 167],[2, 168],[3, 169],[4, 171],[5, 54],[6, 172],[7, 173],[8, 174],[9, 0],[10, 0],[11, 0],[12, 167],[13, 168],[14, 169],[15, 171],[16, 166],[17, 165],[18, 173],[19, 172],[20, 173],[21, 172],[22, 174],[23, 171],[24, 54],[25, 169],[26, 171],[27, 171]]) as Theme

export const dark_orange_alt2 = n52 as Theme
const n53 = t([[0, 167],[1, 168],[2, 169],[3, 171],[4, 54],[5, 172],[6, 173],[7, 174],[8, 0],[9, 249],[10, 249],[11, 249],[12, 168],[13, 169],[14, 171],[15, 54],[16, 167],[17, 166],[19, 54],[20, 172],[21, 54],[22, 173],[23, 54],[24, 172],[25, 171],[26, 54],[27, 169]]) as Theme

export const dark_orange_active = n53 as Theme
const n54 = t([[0, 209],[1, 210],[2, 211],[3, 212],[4, 213],[5, 215],[6, 102],[7, 216],[8, 217],[9, 218],[10, 0],[11, 0],[12, 210],[13, 211],[14, 212],[15, 213],[16, 209],[17, 208],[18, 218],[19, 217],[20, 218],[21, 217],[22, 0],[23, 213],[24, 215],[25, 212],[26, 213],[27, 102]]) as Theme

export const dark_yellow_alt1 = n54 as Theme
const n55 = t([[0, 210],[1, 211],[2, 212],[3, 213],[4, 215],[5, 102],[6, 216],[7, 217],[8, 218],[9, 0],[10, 0],[11, 0],[12, 211],[13, 212],[14, 213],[15, 215],[16, 210],[17, 209],[18, 217],[19, 216],[20, 217],[21, 216],[22, 218],[23, 215],[24, 102],[25, 213],[26, 215],[27, 215]]) as Theme

export const dark_yellow_alt2 = n55 as Theme
const n56 = t([[0, 211],[1, 212],[2, 213],[3, 215],[4, 102],[5, 216],[6, 217],[7, 218],[8, 0],[9, 251],[10, 251],[11, 251],[12, 212],[13, 213],[14, 215],[15, 102],[16, 211],[17, 210],[19, 102],[20, 216],[21, 102],[22, 217],[23, 102],[24, 216],[25, 215],[26, 102],[27, 213]]) as Theme

export const dark_yellow_active = n56 as Theme
const n57 = t([[0, 154],[1, 155],[2, 156],[3, 157],[4, 158],[5, 160],[6, 42],[7, 161],[8, 162],[9, 163],[10, 0],[11, 0],[12, 155],[13, 156],[14, 157],[15, 158],[16, 154],[17, 153],[18, 163],[19, 162],[20, 163],[21, 162],[22, 0],[23, 158],[24, 160],[25, 157],[26, 158],[27, 42]]) as Theme

export const dark_green_alt1 = n57 as Theme
const n58 = t([[0, 155],[1, 156],[2, 157],[3, 158],[4, 160],[5, 42],[6, 161],[7, 162],[8, 163],[9, 0],[10, 0],[11, 0],[12, 156],[13, 157],[14, 158],[15, 160],[16, 155],[17, 154],[18, 162],[19, 161],[20, 162],[21, 161],[22, 163],[23, 160],[24, 42],[25, 158],[26, 160],[27, 160]]) as Theme

export const dark_green_alt2 = n58 as Theme
const n59 = t([[0, 156],[1, 157],[2, 158],[3, 160],[4, 42],[5, 161],[6, 162],[7, 163],[8, 0],[9, 253],[10, 253],[11, 253],[12, 157],[13, 158],[14, 160],[15, 42],[16, 156],[17, 155],[19, 42],[20, 161],[21, 42],[22, 162],[23, 42],[24, 161],[25, 160],[26, 42],[27, 158]]) as Theme

export const dark_green_active = n59 as Theme
const n60 = t([[0, 132],[1, 133],[2, 134],[3, 135],[4, 136],[5, 138],[6, 22],[7, 139],[8, 140],[9, 141],[10, 0],[11, 0],[12, 133],[13, 134],[14, 135],[15, 136],[16, 132],[17, 131],[18, 141],[19, 140],[20, 141],[21, 140],[22, 0],[23, 136],[24, 138],[25, 135],[26, 136],[27, 22]]) as Theme

export const dark_blue_alt1 = n60 as Theme
const n61 = t([[0, 133],[1, 134],[2, 135],[3, 136],[4, 138],[5, 22],[6, 139],[7, 140],[8, 141],[9, 0],[10, 0],[11, 0],[12, 134],[13, 135],[14, 136],[15, 138],[16, 133],[17, 132],[18, 140],[19, 139],[20, 140],[21, 139],[22, 141],[23, 138],[24, 22],[25, 136],[26, 138],[27, 138]]) as Theme

export const dark_blue_alt2 = n61 as Theme
const n62 = t([[0, 134],[1, 135],[2, 136],[3, 138],[4, 22],[5, 139],[6, 140],[7, 141],[8, 0],[9, 255],[10, 255],[11, 255],[12, 135],[13, 136],[14, 138],[15, 22],[16, 134],[17, 133],[19, 22],[20, 139],[21, 22],[22, 140],[23, 22],[24, 139],[25, 138],[26, 22],[27, 136]]) as Theme

export const dark_blue_active = n62 as Theme
const n63 = t([[0, 187],[1, 188],[2, 189],[3, 190],[4, 191],[5, 193],[6, 78],[7, 194],[8, 195],[9, 196],[10, 0],[11, 0],[12, 188],[13, 189],[14, 190],[15, 191],[16, 187],[17, 186],[18, 196],[19, 195],[20, 196],[21, 195],[22, 0],[23, 191],[24, 193],[25, 190],[26, 191],[27, 78]]) as Theme

export const dark_purple_alt1 = n63 as Theme
const n64 = t([[0, 188],[1, 189],[2, 190],[3, 191],[4, 193],[5, 78],[6, 194],[7, 195],[8, 196],[9, 0],[10, 0],[11, 0],[12, 189],[13, 190],[14, 191],[15, 193],[16, 188],[17, 187],[18, 195],[19, 194],[20, 195],[21, 194],[22, 196],[23, 193],[24, 78],[25, 191],[26, 193],[27, 193]]) as Theme

export const dark_purple_alt2 = n64 as Theme
const n65 = t([[0, 189],[1, 190],[2, 191],[3, 193],[4, 78],[5, 194],[6, 195],[7, 196],[8, 0],[9, 257],[10, 257],[11, 257],[12, 190],[13, 191],[14, 193],[15, 78],[16, 189],[17, 188],[19, 78],[20, 194],[21, 78],[22, 195],[23, 78],[24, 194],[25, 193],[26, 78],[27, 191]]) as Theme

export const dark_purple_active = n65 as Theme
const n66 = t([[0, 176],[1, 177],[2, 178],[3, 179],[4, 180],[5, 182],[6, 66],[7, 183],[8, 184],[9, 185],[10, 0],[11, 0],[12, 177],[13, 178],[14, 179],[15, 180],[16, 176],[17, 175],[18, 185],[19, 184],[20, 185],[21, 184],[22, 0],[23, 180],[24, 182],[25, 179],[26, 180],[27, 66]]) as Theme

export const dark_pink_alt1 = n66 as Theme
const n67 = t([[0, 177],[1, 178],[2, 179],[3, 180],[4, 182],[5, 66],[6, 183],[7, 184],[8, 185],[9, 0],[10, 0],[11, 0],[12, 178],[13, 179],[14, 180],[15, 182],[16, 177],[17, 176],[18, 184],[19, 183],[20, 184],[21, 183],[22, 185],[23, 182],[24, 66],[25, 180],[26, 182],[27, 182]]) as Theme

export const dark_pink_alt2 = n67 as Theme
const n68 = t([[0, 178],[1, 179],[2, 180],[3, 182],[4, 66],[5, 183],[6, 184],[7, 185],[8, 0],[9, 259],[10, 259],[11, 259],[12, 179],[13, 180],[14, 182],[15, 66],[16, 178],[17, 177],[19, 66],[20, 183],[21, 66],[22, 184],[23, 66],[24, 183],[25, 182],[26, 66],[27, 180]]) as Theme

export const dark_pink_active = n68 as Theme
const n69 = t([[0, 198],[1, 199],[2, 200],[3, 201],[4, 202],[5, 204],[6, 90],[7, 205],[8, 206],[9, 207],[10, 0],[11, 0],[12, 199],[13, 200],[14, 201],[15, 202],[16, 198],[17, 197],[18, 207],[19, 206],[20, 207],[21, 206],[22, 0],[23, 202],[24, 204],[25, 201],[26, 202],[27, 90]]) as Theme

export const dark_red_alt1 = n69 as Theme
const n70 = t([[0, 199],[1, 200],[2, 201],[3, 202],[4, 204],[5, 90],[6, 205],[7, 206],[8, 207],[9, 0],[10, 0],[11, 0],[12, 200],[13, 201],[14, 202],[15, 204],[16, 199],[17, 198],[18, 206],[19, 205],[20, 206],[21, 205],[22, 207],[23, 204],[24, 90],[25, 202],[26, 204],[27, 204]]) as Theme

export const dark_red_alt2 = n70 as Theme
const n71 = t([[0, 200],[1, 201],[2, 202],[3, 204],[4, 90],[5, 205],[6, 206],[7, 207],[8, 0],[9, 261],[10, 261],[11, 261],[12, 201],[13, 202],[14, 204],[15, 90],[16, 200],[17, 199],[19, 90],[20, 205],[21, 90],[22, 206],[23, 90],[24, 205],[25, 204],[26, 90],[27, 202]]) as Theme

export const dark_red_active = n71 as Theme
const n72 = t([[0, 220],[1, 221],[2, 222],[3, 223],[4, 224],[5, 226],[6, 114],[7, 227],[8, 228],[9, 229],[10, 0],[11, 0],[12, 221],[13, 222],[14, 223],[15, 224],[16, 220],[17, 219],[18, 229],[19, 228],[20, 229],[21, 228],[22, 0],[23, 224],[24, 226],[25, 223],[26, 224],[27, 114]]) as Theme

export const dark_gold_alt1 = n72 as Theme
const n73 = t([[0, 221],[1, 222],[2, 223],[3, 224],[4, 226],[5, 114],[6, 227],[7, 228],[8, 229],[9, 0],[10, 0],[11, 0],[12, 222],[13, 223],[14, 224],[15, 226],[16, 221],[17, 220],[18, 228],[19, 227],[20, 228],[21, 227],[22, 229],[23, 226],[24, 114],[25, 224],[26, 226],[27, 226]]) as Theme

export const dark_gold_alt2 = n73 as Theme
const n74 = t([[0, 222],[1, 223],[2, 224],[3, 226],[4, 114],[5, 227],[6, 228],[7, 229],[8, 0],[9, 263],[10, 263],[11, 263],[12, 223],[13, 224],[14, 226],[15, 114],[16, 222],[17, 221],[19, 114],[20, 227],[21, 114],[22, 228],[23, 114],[24, 227],[25, 226],[26, 114],[27, 224]]) as Theme

export const dark_gold_active = n74 as Theme
const n75 = t([[12, 0],[13, 1],[14, 2],[15, 3],[16, 0],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 3],[24, 4],[25, 2],[26, 3],[27, 9]]) as Theme

export const light_ListItem = n75 as Theme
const n76 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_Card = n76 as Theme
export const light_DrawerFrame = n76 as Theme
export const light_Progress = n76 as Theme
export const light_TooltipArrow = n76 as Theme
const n77 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 266],[24, 266],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_Button = n77 as Theme
const n78 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_Checkbox = n78 as Theme
export const light_Switch = n78 as Theme
export const light_TooltipContent = n78 as Theme
export const light_SliderTrack = n78 as Theme
const n79 = t([[12, 11],[13, 11],[14, 10],[15, 9],[16, 11],[17, 11],[18, 0],[19, 1],[20, 0],[21, 1],[22, 0],[23, 9],[24, 8],[25, 10],[26, 9],[27, 1]]) as Theme

export const light_SwitchThumb = n79 as Theme
const n80 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 0],[19, 1],[20, 0],[21, 1],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]]) as Theme

export const light_SliderTrackActive = n80 as Theme
const n81 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 13],[18, 0],[19, 1],[20, 0],[21, 1],[22, 12],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]]) as Theme

export const light_SliderThumb = n81 as Theme
export const light_Tooltip = n81 as Theme
export const light_ProgressIndicator = n81 as Theme
const n82 = t([[12, 0],[13, 1],[14, 2],[15, 3],[16, 0],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 9]]) as Theme

export const light_Input = n82 as Theme
export const light_TextArea = n82 as Theme
const n83 = t([[12, 121],[13, 122],[14, 123],[15, 124],[16, 120],[17, 13],[18, 0],[19, 130],[20, 0],[21, 130],[22, 12],[23, 124],[24, 125],[25, 123],[26, 124],[27, 128]]) as Theme

export const dark_ListItem = n83 as Theme
const n84 = t([[12, 122],[13, 123],[14, 124],[15, 125],[16, 121],[17, 120],[18, 0],[19, 130],[20, 0],[21, 130],[22, 0],[23, 125],[24, 126],[25, 124],[26, 125],[27, 127]]) as Theme

export const dark_Card = n84 as Theme
export const dark_DrawerFrame = n84 as Theme
export const dark_Progress = n84 as Theme
export const dark_TooltipArrow = n84 as Theme
const n85 = t([[12, 123],[13, 124],[14, 125],[15, 126],[16, 122],[17, 121],[18, 0],[19, 130],[20, 0],[21, 130],[22, 130],[23, 266],[24, 266],[25, 125],[26, 126],[27, 126]]) as Theme

export const dark_Button = n85 as Theme
const n86 = t([[12, 123],[13, 124],[14, 125],[15, 126],[16, 122],[17, 121],[18, 0],[19, 130],[20, 0],[21, 130],[22, 130],[23, 126],[24, 127],[25, 125],[26, 126],[27, 126]]) as Theme

export const dark_Checkbox = n86 as Theme
export const dark_Switch = n86 as Theme
export const dark_TooltipContent = n86 as Theme
export const dark_SliderTrack = n86 as Theme
const n87 = t([[12, 0],[13, 0],[14, 130],[15, 129],[16, 0],[17, 0],[18, 120],[19, 121],[20, 120],[21, 121],[22, 120],[23, 129],[24, 128],[25, 130],[26, 129],[27, 121]]) as Theme

export const dark_SwitchThumb = n87 as Theme
const n88 = t([[12, 128],[13, 127],[14, 126],[15, 125],[16, 129],[17, 130],[18, 120],[19, 121],[20, 120],[21, 121],[22, 121],[23, 125],[24, 124],[25, 126],[26, 125],[27, 125]]) as Theme

export const dark_SliderTrackActive = n88 as Theme
const n89 = t([[12, 130],[13, 129],[14, 128],[15, 127],[16, 0],[17, 12],[18, 120],[19, 121],[20, 120],[21, 121],[22, 13],[23, 127],[24, 126],[25, 128],[26, 127],[27, 123]]) as Theme

export const dark_SliderThumb = n89 as Theme
export const dark_Tooltip = n89 as Theme
export const dark_ProgressIndicator = n89 as Theme
const n90 = t([[12, 121],[13, 122],[14, 123],[15, 124],[16, 120],[17, 13],[18, 0],[19, 130],[20, 0],[21, 130],[22, 12],[23, 125],[24, 126],[25, 124],[26, 125],[27, 128]]) as Theme

export const dark_Input = n90 as Theme
export const dark_TextArea = n90 as Theme
const n91 = t([[12, 46],[13, 47],[14, 48],[15, 49],[16, 46],[17, 46],[18, 11],[19, 57],[20, 11],[21, 57],[22, 11],[23, 48],[24, 49],[25, 48],[26, 48],[27, 56]]) as Theme

export const light_orange_ListItem = n91 as Theme
const n92 = t([[12, 48],[13, 49],[14, 50],[15, 51],[16, 47],[17, 46],[18, 11],[19, 57],[20, 11],[21, 57],[22, 11],[23, 50],[24, 51],[25, 50],[26, 50],[27, 54]]) as Theme

export const light_orange_Card = n92 as Theme
export const light_orange_DrawerFrame = n92 as Theme
export const light_orange_Progress = n92 as Theme
export const light_orange_TooltipArrow = n92 as Theme
const n93 = t([[12, 49],[13, 50],[14, 51],[15, 53],[16, 48],[17, 47],[18, 11],[19, 57],[20, 11],[21, 57],[22, 57],[23, 266],[24, 266],[25, 51],[26, 51],[27, 53]]) as Theme

export const light_orange_Button = n93 as Theme
const n94 = t([[12, 49],[13, 50],[14, 51],[15, 53],[16, 48],[17, 47],[18, 11],[19, 57],[20, 11],[21, 57],[22, 57],[23, 51],[24, 53],[25, 51],[26, 51],[27, 53]]) as Theme

export const light_orange_Checkbox = n94 as Theme
export const light_orange_Switch = n94 as Theme
export const light_orange_TooltipContent = n94 as Theme
export const light_orange_SliderTrack = n94 as Theme
const n95 = t([[12, 11],[13, 11],[14, 57],[15, 56],[16, 11],[17, 11],[18, 46],[19, 47],[20, 46],[21, 47],[22, 46],[23, 57],[24, 56],[25, 57],[26, 57],[27, 47]]) as Theme

export const light_orange_SwitchThumb = n95 as Theme
const n96 = t([[12, 55],[13, 54],[14, 53],[15, 51],[16, 56],[17, 57],[18, 46],[19, 47],[20, 46],[21, 47],[22, 47],[23, 53],[24, 51],[25, 53],[26, 53],[27, 51]]) as Theme

export const light_orange_SliderTrackActive = n96 as Theme
const n97 = t([[12, 57],[13, 56],[14, 55],[15, 54],[16, 11],[17, 233],[18, 46],[19, 47],[20, 46],[21, 47],[22, 232],[23, 55],[24, 54],[25, 55],[26, 55],[27, 49]]) as Theme

export const light_orange_SliderThumb = n97 as Theme
export const light_orange_Tooltip = n97 as Theme
export const light_orange_ProgressIndicator = n97 as Theme
const n98 = t([[12, 46],[13, 47],[14, 48],[15, 49],[16, 46],[17, 46],[18, 11],[19, 57],[20, 11],[21, 57],[22, 11],[23, 50],[24, 51],[25, 50],[26, 50],[27, 56]]) as Theme

export const light_orange_Input = n98 as Theme
export const light_orange_TextArea = n98 as Theme
const n99 = t([[12, 94],[13, 95],[14, 96],[15, 97],[16, 94],[17, 94],[18, 11],[19, 105],[20, 11],[21, 105],[22, 11],[23, 96],[24, 97],[25, 96],[26, 96],[27, 104]]) as Theme

export const light_yellow_ListItem = n99 as Theme
const n100 = t([[12, 96],[13, 97],[14, 98],[15, 99],[16, 95],[17, 94],[18, 11],[19, 105],[20, 11],[21, 105],[22, 11],[23, 98],[24, 99],[25, 98],[26, 98],[27, 102]]) as Theme

export const light_yellow_Card = n100 as Theme
export const light_yellow_DrawerFrame = n100 as Theme
export const light_yellow_Progress = n100 as Theme
export const light_yellow_TooltipArrow = n100 as Theme
const n101 = t([[12, 97],[13, 98],[14, 99],[15, 101],[16, 96],[17, 95],[18, 11],[19, 105],[20, 11],[21, 105],[22, 105],[23, 266],[24, 266],[25, 99],[26, 99],[27, 101]]) as Theme

export const light_yellow_Button = n101 as Theme
const n102 = t([[12, 97],[13, 98],[14, 99],[15, 101],[16, 96],[17, 95],[18, 11],[19, 105],[20, 11],[21, 105],[22, 105],[23, 99],[24, 101],[25, 99],[26, 99],[27, 101]]) as Theme

export const light_yellow_Checkbox = n102 as Theme
export const light_yellow_Switch = n102 as Theme
export const light_yellow_TooltipContent = n102 as Theme
export const light_yellow_SliderTrack = n102 as Theme
const n103 = t([[12, 11],[13, 11],[14, 105],[15, 104],[16, 11],[17, 11],[18, 94],[19, 95],[20, 94],[21, 95],[22, 94],[23, 105],[24, 104],[25, 105],[26, 105],[27, 95]]) as Theme

export const light_yellow_SwitchThumb = n103 as Theme
const n104 = t([[12, 103],[13, 102],[14, 101],[15, 99],[16, 104],[17, 105],[18, 94],[19, 95],[20, 94],[21, 95],[22, 95],[23, 101],[24, 99],[25, 101],[26, 101],[27, 99]]) as Theme

export const light_yellow_SliderTrackActive = n104 as Theme
const n105 = t([[12, 105],[13, 104],[14, 103],[15, 102],[16, 11],[17, 235],[18, 94],[19, 95],[20, 94],[21, 95],[22, 234],[23, 103],[24, 102],[25, 103],[26, 103],[27, 97]]) as Theme

export const light_yellow_SliderThumb = n105 as Theme
export const light_yellow_Tooltip = n105 as Theme
export const light_yellow_ProgressIndicator = n105 as Theme
const n106 = t([[12, 94],[13, 95],[14, 96],[15, 97],[16, 94],[17, 94],[18, 11],[19, 105],[20, 11],[21, 105],[22, 11],[23, 98],[24, 99],[25, 98],[26, 98],[27, 104]]) as Theme

export const light_yellow_Input = n106 as Theme
export const light_yellow_TextArea = n106 as Theme
const n107 = t([[12, 34],[13, 35],[14, 36],[15, 37],[16, 34],[17, 34],[18, 11],[19, 45],[20, 11],[21, 45],[22, 11],[23, 36],[24, 37],[25, 36],[26, 36],[27, 44]]) as Theme

export const light_green_ListItem = n107 as Theme
const n108 = t([[12, 36],[13, 37],[14, 38],[15, 39],[16, 35],[17, 34],[18, 11],[19, 45],[20, 11],[21, 45],[22, 11],[23, 38],[24, 39],[25, 38],[26, 38],[27, 42]]) as Theme

export const light_green_Card = n108 as Theme
export const light_green_DrawerFrame = n108 as Theme
export const light_green_Progress = n108 as Theme
export const light_green_TooltipArrow = n108 as Theme
const n109 = t([[12, 37],[13, 38],[14, 39],[15, 41],[16, 36],[17, 35],[18, 11],[19, 45],[20, 11],[21, 45],[22, 45],[23, 266],[24, 266],[25, 39],[26, 39],[27, 41]]) as Theme

export const light_green_Button = n109 as Theme
const n110 = t([[12, 37],[13, 38],[14, 39],[15, 41],[16, 36],[17, 35],[18, 11],[19, 45],[20, 11],[21, 45],[22, 45],[23, 39],[24, 41],[25, 39],[26, 39],[27, 41]]) as Theme

export const light_green_Checkbox = n110 as Theme
export const light_green_Switch = n110 as Theme
export const light_green_TooltipContent = n110 as Theme
export const light_green_SliderTrack = n110 as Theme
const n111 = t([[12, 11],[13, 11],[14, 45],[15, 44],[16, 11],[17, 11],[18, 34],[19, 35],[20, 34],[21, 35],[22, 34],[23, 45],[24, 44],[25, 45],[26, 45],[27, 35]]) as Theme

export const light_green_SwitchThumb = n111 as Theme
const n112 = t([[12, 43],[13, 42],[14, 41],[15, 39],[16, 44],[17, 45],[18, 34],[19, 35],[20, 34],[21, 35],[22, 35],[23, 41],[24, 39],[25, 41],[26, 41],[27, 39]]) as Theme

export const light_green_SliderTrackActive = n112 as Theme
const n113 = t([[12, 45],[13, 44],[14, 43],[15, 42],[16, 11],[17, 237],[18, 34],[19, 35],[20, 34],[21, 35],[22, 236],[23, 43],[24, 42],[25, 43],[26, 43],[27, 37]]) as Theme

export const light_green_SliderThumb = n113 as Theme
export const light_green_Tooltip = n113 as Theme
export const light_green_ProgressIndicator = n113 as Theme
const n114 = t([[12, 34],[13, 35],[14, 36],[15, 37],[16, 34],[17, 34],[18, 11],[19, 45],[20, 11],[21, 45],[22, 11],[23, 38],[24, 39],[25, 38],[26, 38],[27, 44]]) as Theme

export const light_green_Input = n114 as Theme
export const light_green_TextArea = n114 as Theme
const n115 = t([[12, 14],[13, 15],[14, 16],[15, 17],[16, 14],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 11],[23, 16],[24, 17],[25, 16],[26, 16],[27, 24]]) as Theme

export const light_blue_ListItem = n115 as Theme
const n116 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 22]]) as Theme

export const light_blue_Card = n116 as Theme
export const light_blue_DrawerFrame = n116 as Theme
export const light_blue_Progress = n116 as Theme
export const light_blue_TooltipArrow = n116 as Theme
const n117 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 11],[19, 25],[20, 11],[21, 25],[22, 25],[23, 266],[24, 266],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_Button = n117 as Theme
const n118 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 11],[19, 25],[20, 11],[21, 25],[22, 25],[23, 19],[24, 21],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_Checkbox = n118 as Theme
export const light_blue_Switch = n118 as Theme
export const light_blue_TooltipContent = n118 as Theme
export const light_blue_SliderTrack = n118 as Theme
const n119 = t([[12, 11],[13, 11],[14, 25],[15, 24],[16, 11],[17, 11],[18, 14],[19, 15],[20, 14],[21, 15],[22, 14],[23, 25],[24, 24],[25, 25],[26, 25],[27, 15]]) as Theme

export const light_blue_SwitchThumb = n119 as Theme
const n120 = t([[12, 23],[13, 22],[14, 21],[15, 19],[16, 24],[17, 25],[18, 14],[19, 15],[20, 14],[21, 15],[22, 15],[23, 21],[24, 19],[25, 21],[26, 21],[27, 19]]) as Theme

export const light_blue_SliderTrackActive = n120 as Theme
const n121 = t([[12, 25],[13, 24],[14, 23],[15, 22],[16, 11],[17, 239],[18, 14],[19, 15],[20, 14],[21, 15],[22, 238],[23, 23],[24, 22],[25, 23],[26, 23],[27, 17]]) as Theme

export const light_blue_SliderThumb = n121 as Theme
export const light_blue_Tooltip = n121 as Theme
export const light_blue_ProgressIndicator = n121 as Theme
const n122 = t([[12, 14],[13, 15],[14, 16],[15, 17],[16, 14],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 24]]) as Theme

export const light_blue_Input = n122 as Theme
export const light_blue_TextArea = n122 as Theme
const n123 = t([[12, 70],[13, 71],[14, 72],[15, 73],[16, 70],[17, 70],[18, 11],[19, 81],[20, 11],[21, 81],[22, 11],[23, 72],[24, 73],[25, 72],[26, 72],[27, 80]]) as Theme

export const light_purple_ListItem = n123 as Theme
const n124 = t([[12, 72],[13, 73],[14, 74],[15, 75],[16, 71],[17, 70],[18, 11],[19, 81],[20, 11],[21, 81],[22, 11],[23, 74],[24, 75],[25, 74],[26, 74],[27, 78]]) as Theme

export const light_purple_Card = n124 as Theme
export const light_purple_DrawerFrame = n124 as Theme
export const light_purple_Progress = n124 as Theme
export const light_purple_TooltipArrow = n124 as Theme
const n125 = t([[12, 73],[13, 74],[14, 75],[15, 77],[16, 72],[17, 71],[18, 11],[19, 81],[20, 11],[21, 81],[22, 81],[23, 266],[24, 266],[25, 75],[26, 75],[27, 77]]) as Theme

export const light_purple_Button = n125 as Theme
const n126 = t([[12, 73],[13, 74],[14, 75],[15, 77],[16, 72],[17, 71],[18, 11],[19, 81],[20, 11],[21, 81],[22, 81],[23, 75],[24, 77],[25, 75],[26, 75],[27, 77]]) as Theme

export const light_purple_Checkbox = n126 as Theme
export const light_purple_Switch = n126 as Theme
export const light_purple_TooltipContent = n126 as Theme
export const light_purple_SliderTrack = n126 as Theme
const n127 = t([[12, 11],[13, 11],[14, 81],[15, 80],[16, 11],[17, 11],[18, 70],[19, 71],[20, 70],[21, 71],[22, 70],[23, 81],[24, 80],[25, 81],[26, 81],[27, 71]]) as Theme

export const light_purple_SwitchThumb = n127 as Theme
const n128 = t([[12, 79],[13, 78],[14, 77],[15, 75],[16, 80],[17, 81],[18, 70],[19, 71],[20, 70],[21, 71],[22, 71],[23, 77],[24, 75],[25, 77],[26, 77],[27, 75]]) as Theme

export const light_purple_SliderTrackActive = n128 as Theme
const n129 = t([[12, 81],[13, 80],[14, 79],[15, 78],[16, 11],[17, 241],[18, 70],[19, 71],[20, 70],[21, 71],[22, 240],[23, 79],[24, 78],[25, 79],[26, 79],[27, 73]]) as Theme

export const light_purple_SliderThumb = n129 as Theme
export const light_purple_Tooltip = n129 as Theme
export const light_purple_ProgressIndicator = n129 as Theme
const n130 = t([[12, 70],[13, 71],[14, 72],[15, 73],[16, 70],[17, 70],[18, 11],[19, 81],[20, 11],[21, 81],[22, 11],[23, 74],[24, 75],[25, 74],[26, 74],[27, 80]]) as Theme

export const light_purple_Input = n130 as Theme
export const light_purple_TextArea = n130 as Theme
const n131 = t([[12, 58],[13, 59],[14, 60],[15, 61],[16, 58],[17, 58],[18, 11],[19, 69],[20, 11],[21, 69],[22, 11],[23, 60],[24, 61],[25, 60],[26, 60],[27, 68]]) as Theme

export const light_pink_ListItem = n131 as Theme
const n132 = t([[12, 60],[13, 61],[14, 62],[15, 63],[16, 59],[17, 58],[18, 11],[19, 69],[20, 11],[21, 69],[22, 11],[23, 62],[24, 63],[25, 62],[26, 62],[27, 66]]) as Theme

export const light_pink_Card = n132 as Theme
export const light_pink_DrawerFrame = n132 as Theme
export const light_pink_Progress = n132 as Theme
export const light_pink_TooltipArrow = n132 as Theme
const n133 = t([[12, 61],[13, 62],[14, 63],[15, 65],[16, 60],[17, 59],[18, 11],[19, 69],[20, 11],[21, 69],[22, 69],[23, 266],[24, 266],[25, 63],[26, 63],[27, 65]]) as Theme

export const light_pink_Button = n133 as Theme
const n134 = t([[12, 61],[13, 62],[14, 63],[15, 65],[16, 60],[17, 59],[18, 11],[19, 69],[20, 11],[21, 69],[22, 69],[23, 63],[24, 65],[25, 63],[26, 63],[27, 65]]) as Theme

export const light_pink_Checkbox = n134 as Theme
export const light_pink_Switch = n134 as Theme
export const light_pink_TooltipContent = n134 as Theme
export const light_pink_SliderTrack = n134 as Theme
const n135 = t([[12, 11],[13, 11],[14, 69],[15, 68],[16, 11],[17, 11],[18, 58],[19, 59],[20, 58],[21, 59],[22, 58],[23, 69],[24, 68],[25, 69],[26, 69],[27, 59]]) as Theme

export const light_pink_SwitchThumb = n135 as Theme
const n136 = t([[12, 67],[13, 66],[14, 65],[15, 63],[16, 68],[17, 69],[18, 58],[19, 59],[20, 58],[21, 59],[22, 59],[23, 65],[24, 63],[25, 65],[26, 65],[27, 63]]) as Theme

export const light_pink_SliderTrackActive = n136 as Theme
const n137 = t([[12, 69],[13, 68],[14, 67],[15, 66],[16, 11],[17, 243],[18, 58],[19, 59],[20, 58],[21, 59],[22, 242],[23, 67],[24, 66],[25, 67],[26, 67],[27, 61]]) as Theme

export const light_pink_SliderThumb = n137 as Theme
export const light_pink_Tooltip = n137 as Theme
export const light_pink_ProgressIndicator = n137 as Theme
const n138 = t([[12, 58],[13, 59],[14, 60],[15, 61],[16, 58],[17, 58],[18, 11],[19, 69],[20, 11],[21, 69],[22, 11],[23, 62],[24, 63],[25, 62],[26, 62],[27, 68]]) as Theme

export const light_pink_Input = n138 as Theme
export const light_pink_TextArea = n138 as Theme
const n139 = t([[12, 82],[13, 83],[14, 84],[15, 85],[16, 82],[17, 82],[18, 11],[19, 93],[20, 11],[21, 93],[22, 11],[23, 84],[24, 85],[25, 84],[26, 84],[27, 92]]) as Theme

export const light_red_ListItem = n139 as Theme
const n140 = t([[12, 84],[13, 85],[14, 86],[15, 87],[16, 83],[17, 82],[18, 11],[19, 93],[20, 11],[21, 93],[22, 11],[23, 86],[24, 87],[25, 86],[26, 86],[27, 90]]) as Theme

export const light_red_Card = n140 as Theme
export const light_red_DrawerFrame = n140 as Theme
export const light_red_Progress = n140 as Theme
export const light_red_TooltipArrow = n140 as Theme
const n141 = t([[12, 85],[13, 86],[14, 87],[15, 89],[16, 84],[17, 83],[18, 11],[19, 93],[20, 11],[21, 93],[22, 93],[23, 266],[24, 266],[25, 87],[26, 87],[27, 89]]) as Theme

export const light_red_Button = n141 as Theme
const n142 = t([[12, 85],[13, 86],[14, 87],[15, 89],[16, 84],[17, 83],[18, 11],[19, 93],[20, 11],[21, 93],[22, 93],[23, 87],[24, 89],[25, 87],[26, 87],[27, 89]]) as Theme

export const light_red_Checkbox = n142 as Theme
export const light_red_Switch = n142 as Theme
export const light_red_TooltipContent = n142 as Theme
export const light_red_SliderTrack = n142 as Theme
const n143 = t([[12, 11],[13, 11],[14, 93],[15, 92],[16, 11],[17, 11],[18, 82],[19, 83],[20, 82],[21, 83],[22, 82],[23, 93],[24, 92],[25, 93],[26, 93],[27, 83]]) as Theme

export const light_red_SwitchThumb = n143 as Theme
const n144 = t([[12, 91],[13, 90],[14, 89],[15, 87],[16, 92],[17, 93],[18, 82],[19, 83],[20, 82],[21, 83],[22, 83],[23, 89],[24, 87],[25, 89],[26, 89],[27, 87]]) as Theme

export const light_red_SliderTrackActive = n144 as Theme
const n145 = t([[12, 93],[13, 92],[14, 91],[15, 90],[16, 11],[17, 245],[18, 82],[19, 83],[20, 82],[21, 83],[22, 244],[23, 91],[24, 90],[25, 91],[26, 91],[27, 85]]) as Theme

export const light_red_SliderThumb = n145 as Theme
export const light_red_Tooltip = n145 as Theme
export const light_red_ProgressIndicator = n145 as Theme
const n146 = t([[12, 82],[13, 83],[14, 84],[15, 85],[16, 82],[17, 82],[18, 11],[19, 93],[20, 11],[21, 93],[22, 11],[23, 86],[24, 87],[25, 86],[26, 86],[27, 92]]) as Theme

export const light_red_Input = n146 as Theme
export const light_red_TextArea = n146 as Theme
const n147 = t([[12, 106],[13, 107],[14, 108],[15, 109],[16, 106],[17, 106],[18, 11],[19, 117],[20, 11],[21, 117],[22, 11],[23, 108],[24, 109],[25, 108],[26, 108],[27, 116]]) as Theme

export const light_gold_ListItem = n147 as Theme
const n148 = t([[12, 108],[13, 109],[14, 110],[15, 111],[16, 107],[17, 106],[18, 11],[19, 117],[20, 11],[21, 117],[22, 11],[23, 110],[24, 111],[25, 110],[26, 110],[27, 114]]) as Theme

export const light_gold_Card = n148 as Theme
export const light_gold_DrawerFrame = n148 as Theme
export const light_gold_Progress = n148 as Theme
export const light_gold_TooltipArrow = n148 as Theme
const n149 = t([[12, 109],[13, 110],[14, 111],[15, 113],[16, 108],[17, 107],[18, 11],[19, 117],[20, 11],[21, 117],[22, 117],[23, 266],[24, 266],[25, 111],[26, 111],[27, 113]]) as Theme

export const light_gold_Button = n149 as Theme
const n150 = t([[12, 109],[13, 110],[14, 111],[15, 113],[16, 108],[17, 107],[18, 11],[19, 117],[20, 11],[21, 117],[22, 117],[23, 111],[24, 113],[25, 111],[26, 111],[27, 113]]) as Theme

export const light_gold_Checkbox = n150 as Theme
export const light_gold_Switch = n150 as Theme
export const light_gold_TooltipContent = n150 as Theme
export const light_gold_SliderTrack = n150 as Theme
const n151 = t([[12, 11],[13, 11],[14, 117],[15, 116],[16, 11],[17, 11],[18, 106],[19, 107],[20, 106],[21, 107],[22, 106],[23, 117],[24, 116],[25, 117],[26, 117],[27, 107]]) as Theme

export const light_gold_SwitchThumb = n151 as Theme
const n152 = t([[12, 115],[13, 114],[14, 113],[15, 111],[16, 116],[17, 117],[18, 106],[19, 107],[20, 106],[21, 107],[22, 107],[23, 113],[24, 111],[25, 113],[26, 113],[27, 111]]) as Theme

export const light_gold_SliderTrackActive = n152 as Theme
const n153 = t([[12, 117],[13, 116],[14, 115],[15, 114],[16, 11],[17, 247],[18, 106],[19, 107],[20, 106],[21, 107],[22, 246],[23, 115],[24, 114],[25, 115],[26, 115],[27, 109]]) as Theme

export const light_gold_SliderThumb = n153 as Theme
export const light_gold_Tooltip = n153 as Theme
export const light_gold_ProgressIndicator = n153 as Theme
const n154 = t([[12, 106],[13, 107],[14, 108],[15, 109],[16, 106],[17, 106],[18, 11],[19, 117],[20, 11],[21, 117],[22, 11],[23, 110],[24, 111],[25, 110],[26, 110],[27, 116]]) as Theme

export const light_gold_Input = n154 as Theme
export const light_gold_TextArea = n154 as Theme
const n155 = t([[12, 165],[13, 166],[14, 167],[15, 168],[16, 164],[17, 248],[18, 0],[19, 174],[20, 0],[21, 174],[22, 249],[23, 168],[24, 169],[25, 167],[26, 168],[27, 172]]) as Theme

export const dark_orange_ListItem = n155 as Theme
const n156 = t([[12, 166],[13, 167],[14, 168],[15, 169],[16, 165],[17, 164],[18, 0],[19, 174],[20, 0],[21, 174],[22, 0],[23, 169],[24, 171],[25, 168],[26, 169],[27, 54]]) as Theme

export const dark_orange_Card = n156 as Theme
export const dark_orange_DrawerFrame = n156 as Theme
export const dark_orange_Progress = n156 as Theme
export const dark_orange_TooltipArrow = n156 as Theme
const n157 = t([[12, 167],[13, 168],[14, 169],[15, 171],[16, 166],[17, 165],[18, 0],[19, 174],[20, 0],[21, 174],[22, 174],[23, 266],[24, 266],[25, 169],[26, 171],[27, 171]]) as Theme

export const dark_orange_Button = n157 as Theme
const n158 = t([[12, 167],[13, 168],[14, 169],[15, 171],[16, 166],[17, 165],[18, 0],[19, 174],[20, 0],[21, 174],[22, 174],[23, 171],[24, 54],[25, 169],[26, 171],[27, 171]]) as Theme

export const dark_orange_Checkbox = n158 as Theme
export const dark_orange_Switch = n158 as Theme
export const dark_orange_TooltipContent = n158 as Theme
export const dark_orange_SliderTrack = n158 as Theme
const n159 = t([[12, 0],[13, 0],[14, 174],[15, 173],[16, 0],[17, 0],[18, 164],[19, 165],[20, 164],[21, 165],[22, 164],[23, 173],[24, 172],[25, 174],[26, 173],[27, 165]]) as Theme

export const dark_orange_SwitchThumb = n159 as Theme
const n160 = t([[12, 172],[13, 54],[14, 171],[15, 169],[16, 173],[17, 174],[18, 164],[19, 165],[20, 164],[21, 165],[22, 165],[23, 169],[24, 168],[25, 171],[26, 169],[27, 169]]) as Theme

export const dark_orange_SliderTrackActive = n160 as Theme
const n161 = t([[12, 174],[13, 173],[14, 172],[15, 54],[16, 0],[17, 249],[18, 164],[19, 165],[20, 164],[21, 165],[22, 248],[23, 54],[24, 171],[25, 172],[26, 54],[27, 167]]) as Theme

export const dark_orange_SliderThumb = n161 as Theme
export const dark_orange_Tooltip = n161 as Theme
export const dark_orange_ProgressIndicator = n161 as Theme
const n162 = t([[12, 165],[13, 166],[14, 167],[15, 168],[16, 164],[17, 248],[18, 0],[19, 174],[20, 0],[21, 174],[22, 249],[23, 169],[24, 171],[25, 168],[26, 169],[27, 172]]) as Theme

export const dark_orange_Input = n162 as Theme
export const dark_orange_TextArea = n162 as Theme
const n163 = t([[12, 209],[13, 210],[14, 211],[15, 212],[16, 208],[17, 250],[18, 0],[19, 218],[20, 0],[21, 218],[22, 251],[23, 212],[24, 213],[25, 211],[26, 212],[27, 216]]) as Theme

export const dark_yellow_ListItem = n163 as Theme
const n164 = t([[12, 210],[13, 211],[14, 212],[15, 213],[16, 209],[17, 208],[18, 0],[19, 218],[20, 0],[21, 218],[22, 0],[23, 213],[24, 215],[25, 212],[26, 213],[27, 102]]) as Theme

export const dark_yellow_Card = n164 as Theme
export const dark_yellow_DrawerFrame = n164 as Theme
export const dark_yellow_Progress = n164 as Theme
export const dark_yellow_TooltipArrow = n164 as Theme
const n165 = t([[12, 211],[13, 212],[14, 213],[15, 215],[16, 210],[17, 209],[18, 0],[19, 218],[20, 0],[21, 218],[22, 218],[23, 266],[24, 266],[25, 213],[26, 215],[27, 215]]) as Theme

export const dark_yellow_Button = n165 as Theme
const n166 = t([[12, 211],[13, 212],[14, 213],[15, 215],[16, 210],[17, 209],[18, 0],[19, 218],[20, 0],[21, 218],[22, 218],[23, 215],[24, 102],[25, 213],[26, 215],[27, 215]]) as Theme

export const dark_yellow_Checkbox = n166 as Theme
export const dark_yellow_Switch = n166 as Theme
export const dark_yellow_TooltipContent = n166 as Theme
export const dark_yellow_SliderTrack = n166 as Theme
const n167 = t([[12, 0],[13, 0],[14, 218],[15, 217],[16, 0],[17, 0],[18, 208],[19, 209],[20, 208],[21, 209],[22, 208],[23, 217],[24, 216],[25, 218],[26, 217],[27, 209]]) as Theme

export const dark_yellow_SwitchThumb = n167 as Theme
const n168 = t([[12, 216],[13, 102],[14, 215],[15, 213],[16, 217],[17, 218],[18, 208],[19, 209],[20, 208],[21, 209],[22, 209],[23, 213],[24, 212],[25, 215],[26, 213],[27, 213]]) as Theme

export const dark_yellow_SliderTrackActive = n168 as Theme
const n169 = t([[12, 218],[13, 217],[14, 216],[15, 102],[16, 0],[17, 251],[18, 208],[19, 209],[20, 208],[21, 209],[22, 250],[23, 102],[24, 215],[25, 216],[26, 102],[27, 211]]) as Theme

export const dark_yellow_SliderThumb = n169 as Theme
export const dark_yellow_Tooltip = n169 as Theme
export const dark_yellow_ProgressIndicator = n169 as Theme
const n170 = t([[12, 209],[13, 210],[14, 211],[15, 212],[16, 208],[17, 250],[18, 0],[19, 218],[20, 0],[21, 218],[22, 251],[23, 213],[24, 215],[25, 212],[26, 213],[27, 216]]) as Theme

export const dark_yellow_Input = n170 as Theme
export const dark_yellow_TextArea = n170 as Theme
const n171 = t([[12, 154],[13, 155],[14, 156],[15, 157],[16, 153],[17, 252],[18, 0],[19, 163],[20, 0],[21, 163],[22, 253],[23, 157],[24, 158],[25, 156],[26, 157],[27, 161]]) as Theme

export const dark_green_ListItem = n171 as Theme
const n172 = t([[12, 155],[13, 156],[14, 157],[15, 158],[16, 154],[17, 153],[18, 0],[19, 163],[20, 0],[21, 163],[22, 0],[23, 158],[24, 160],[25, 157],[26, 158],[27, 42]]) as Theme

export const dark_green_Card = n172 as Theme
export const dark_green_DrawerFrame = n172 as Theme
export const dark_green_Progress = n172 as Theme
export const dark_green_TooltipArrow = n172 as Theme
const n173 = t([[12, 156],[13, 157],[14, 158],[15, 160],[16, 155],[17, 154],[18, 0],[19, 163],[20, 0],[21, 163],[22, 163],[23, 266],[24, 266],[25, 158],[26, 160],[27, 160]]) as Theme

export const dark_green_Button = n173 as Theme
const n174 = t([[12, 156],[13, 157],[14, 158],[15, 160],[16, 155],[17, 154],[18, 0],[19, 163],[20, 0],[21, 163],[22, 163],[23, 160],[24, 42],[25, 158],[26, 160],[27, 160]]) as Theme

export const dark_green_Checkbox = n174 as Theme
export const dark_green_Switch = n174 as Theme
export const dark_green_TooltipContent = n174 as Theme
export const dark_green_SliderTrack = n174 as Theme
const n175 = t([[12, 0],[13, 0],[14, 163],[15, 162],[16, 0],[17, 0],[18, 153],[19, 154],[20, 153],[21, 154],[22, 153],[23, 162],[24, 161],[25, 163],[26, 162],[27, 154]]) as Theme

export const dark_green_SwitchThumb = n175 as Theme
const n176 = t([[12, 161],[13, 42],[14, 160],[15, 158],[16, 162],[17, 163],[18, 153],[19, 154],[20, 153],[21, 154],[22, 154],[23, 158],[24, 157],[25, 160],[26, 158],[27, 158]]) as Theme

export const dark_green_SliderTrackActive = n176 as Theme
const n177 = t([[12, 163],[13, 162],[14, 161],[15, 42],[16, 0],[17, 253],[18, 153],[19, 154],[20, 153],[21, 154],[22, 252],[23, 42],[24, 160],[25, 161],[26, 42],[27, 156]]) as Theme

export const dark_green_SliderThumb = n177 as Theme
export const dark_green_Tooltip = n177 as Theme
export const dark_green_ProgressIndicator = n177 as Theme
const n178 = t([[12, 154],[13, 155],[14, 156],[15, 157],[16, 153],[17, 252],[18, 0],[19, 163],[20, 0],[21, 163],[22, 253],[23, 158],[24, 160],[25, 157],[26, 158],[27, 161]]) as Theme

export const dark_green_Input = n178 as Theme
export const dark_green_TextArea = n178 as Theme
const n179 = t([[12, 132],[13, 133],[14, 134],[15, 135],[16, 131],[17, 254],[18, 0],[19, 141],[20, 0],[21, 141],[22, 255],[23, 135],[24, 136],[25, 134],[26, 135],[27, 139]]) as Theme

export const dark_blue_ListItem = n179 as Theme
const n180 = t([[12, 133],[13, 134],[14, 135],[15, 136],[16, 132],[17, 131],[18, 0],[19, 141],[20, 0],[21, 141],[22, 0],[23, 136],[24, 138],[25, 135],[26, 136],[27, 22]]) as Theme

export const dark_blue_Card = n180 as Theme
export const dark_blue_DrawerFrame = n180 as Theme
export const dark_blue_Progress = n180 as Theme
export const dark_blue_TooltipArrow = n180 as Theme
const n181 = t([[12, 134],[13, 135],[14, 136],[15, 138],[16, 133],[17, 132],[18, 0],[19, 141],[20, 0],[21, 141],[22, 141],[23, 266],[24, 266],[25, 136],[26, 138],[27, 138]]) as Theme

export const dark_blue_Button = n181 as Theme
const n182 = t([[12, 134],[13, 135],[14, 136],[15, 138],[16, 133],[17, 132],[18, 0],[19, 141],[20, 0],[21, 141],[22, 141],[23, 138],[24, 22],[25, 136],[26, 138],[27, 138]]) as Theme

export const dark_blue_Checkbox = n182 as Theme
export const dark_blue_Switch = n182 as Theme
export const dark_blue_TooltipContent = n182 as Theme
export const dark_blue_SliderTrack = n182 as Theme
const n183 = t([[12, 0],[13, 0],[14, 141],[15, 140],[16, 0],[17, 0],[18, 131],[19, 132],[20, 131],[21, 132],[22, 131],[23, 140],[24, 139],[25, 141],[26, 140],[27, 132]]) as Theme

export const dark_blue_SwitchThumb = n183 as Theme
const n184 = t([[12, 139],[13, 22],[14, 138],[15, 136],[16, 140],[17, 141],[18, 131],[19, 132],[20, 131],[21, 132],[22, 132],[23, 136],[24, 135],[25, 138],[26, 136],[27, 136]]) as Theme

export const dark_blue_SliderTrackActive = n184 as Theme
const n185 = t([[12, 141],[13, 140],[14, 139],[15, 22],[16, 0],[17, 255],[18, 131],[19, 132],[20, 131],[21, 132],[22, 254],[23, 22],[24, 138],[25, 139],[26, 22],[27, 134]]) as Theme

export const dark_blue_SliderThumb = n185 as Theme
export const dark_blue_Tooltip = n185 as Theme
export const dark_blue_ProgressIndicator = n185 as Theme
const n186 = t([[12, 132],[13, 133],[14, 134],[15, 135],[16, 131],[17, 254],[18, 0],[19, 141],[20, 0],[21, 141],[22, 255],[23, 136],[24, 138],[25, 135],[26, 136],[27, 139]]) as Theme

export const dark_blue_Input = n186 as Theme
export const dark_blue_TextArea = n186 as Theme
const n187 = t([[12, 187],[13, 188],[14, 189],[15, 190],[16, 186],[17, 256],[18, 0],[19, 196],[20, 0],[21, 196],[22, 257],[23, 190],[24, 191],[25, 189],[26, 190],[27, 194]]) as Theme

export const dark_purple_ListItem = n187 as Theme
const n188 = t([[12, 188],[13, 189],[14, 190],[15, 191],[16, 187],[17, 186],[18, 0],[19, 196],[20, 0],[21, 196],[22, 0],[23, 191],[24, 193],[25, 190],[26, 191],[27, 78]]) as Theme

export const dark_purple_Card = n188 as Theme
export const dark_purple_DrawerFrame = n188 as Theme
export const dark_purple_Progress = n188 as Theme
export const dark_purple_TooltipArrow = n188 as Theme
const n189 = t([[12, 189],[13, 190],[14, 191],[15, 193],[16, 188],[17, 187],[18, 0],[19, 196],[20, 0],[21, 196],[22, 196],[23, 266],[24, 266],[25, 191],[26, 193],[27, 193]]) as Theme

export const dark_purple_Button = n189 as Theme
const n190 = t([[12, 189],[13, 190],[14, 191],[15, 193],[16, 188],[17, 187],[18, 0],[19, 196],[20, 0],[21, 196],[22, 196],[23, 193],[24, 78],[25, 191],[26, 193],[27, 193]]) as Theme

export const dark_purple_Checkbox = n190 as Theme
export const dark_purple_Switch = n190 as Theme
export const dark_purple_TooltipContent = n190 as Theme
export const dark_purple_SliderTrack = n190 as Theme
const n191 = t([[12, 0],[13, 0],[14, 196],[15, 195],[16, 0],[17, 0],[18, 186],[19, 187],[20, 186],[21, 187],[22, 186],[23, 195],[24, 194],[25, 196],[26, 195],[27, 187]]) as Theme

export const dark_purple_SwitchThumb = n191 as Theme
const n192 = t([[12, 194],[13, 78],[14, 193],[15, 191],[16, 195],[17, 196],[18, 186],[19, 187],[20, 186],[21, 187],[22, 187],[23, 191],[24, 190],[25, 193],[26, 191],[27, 191]]) as Theme

export const dark_purple_SliderTrackActive = n192 as Theme
const n193 = t([[12, 196],[13, 195],[14, 194],[15, 78],[16, 0],[17, 257],[18, 186],[19, 187],[20, 186],[21, 187],[22, 256],[23, 78],[24, 193],[25, 194],[26, 78],[27, 189]]) as Theme

export const dark_purple_SliderThumb = n193 as Theme
export const dark_purple_Tooltip = n193 as Theme
export const dark_purple_ProgressIndicator = n193 as Theme
const n194 = t([[12, 187],[13, 188],[14, 189],[15, 190],[16, 186],[17, 256],[18, 0],[19, 196],[20, 0],[21, 196],[22, 257],[23, 191],[24, 193],[25, 190],[26, 191],[27, 194]]) as Theme

export const dark_purple_Input = n194 as Theme
export const dark_purple_TextArea = n194 as Theme
const n195 = t([[12, 176],[13, 177],[14, 178],[15, 179],[16, 175],[17, 258],[18, 0],[19, 185],[20, 0],[21, 185],[22, 259],[23, 179],[24, 180],[25, 178],[26, 179],[27, 183]]) as Theme

export const dark_pink_ListItem = n195 as Theme
const n196 = t([[12, 177],[13, 178],[14, 179],[15, 180],[16, 176],[17, 175],[18, 0],[19, 185],[20, 0],[21, 185],[22, 0],[23, 180],[24, 182],[25, 179],[26, 180],[27, 66]]) as Theme

export const dark_pink_Card = n196 as Theme
export const dark_pink_DrawerFrame = n196 as Theme
export const dark_pink_Progress = n196 as Theme
export const dark_pink_TooltipArrow = n196 as Theme
const n197 = t([[12, 178],[13, 179],[14, 180],[15, 182],[16, 177],[17, 176],[18, 0],[19, 185],[20, 0],[21, 185],[22, 185],[23, 266],[24, 266],[25, 180],[26, 182],[27, 182]]) as Theme

export const dark_pink_Button = n197 as Theme
const n198 = t([[12, 178],[13, 179],[14, 180],[15, 182],[16, 177],[17, 176],[18, 0],[19, 185],[20, 0],[21, 185],[22, 185],[23, 182],[24, 66],[25, 180],[26, 182],[27, 182]]) as Theme

export const dark_pink_Checkbox = n198 as Theme
export const dark_pink_Switch = n198 as Theme
export const dark_pink_TooltipContent = n198 as Theme
export const dark_pink_SliderTrack = n198 as Theme
const n199 = t([[12, 0],[13, 0],[14, 185],[15, 184],[16, 0],[17, 0],[18, 175],[19, 176],[20, 175],[21, 176],[22, 175],[23, 184],[24, 183],[25, 185],[26, 184],[27, 176]]) as Theme

export const dark_pink_SwitchThumb = n199 as Theme
const n200 = t([[12, 183],[13, 66],[14, 182],[15, 180],[16, 184],[17, 185],[18, 175],[19, 176],[20, 175],[21, 176],[22, 176],[23, 180],[24, 179],[25, 182],[26, 180],[27, 180]]) as Theme

export const dark_pink_SliderTrackActive = n200 as Theme
const n201 = t([[12, 185],[13, 184],[14, 183],[15, 66],[16, 0],[17, 259],[18, 175],[19, 176],[20, 175],[21, 176],[22, 258],[23, 66],[24, 182],[25, 183],[26, 66],[27, 178]]) as Theme

export const dark_pink_SliderThumb = n201 as Theme
export const dark_pink_Tooltip = n201 as Theme
export const dark_pink_ProgressIndicator = n201 as Theme
const n202 = t([[12, 176],[13, 177],[14, 178],[15, 179],[16, 175],[17, 258],[18, 0],[19, 185],[20, 0],[21, 185],[22, 259],[23, 180],[24, 182],[25, 179],[26, 180],[27, 183]]) as Theme

export const dark_pink_Input = n202 as Theme
export const dark_pink_TextArea = n202 as Theme
const n203 = t([[12, 198],[13, 199],[14, 200],[15, 201],[16, 197],[17, 260],[18, 0],[19, 207],[20, 0],[21, 207],[22, 261],[23, 201],[24, 202],[25, 200],[26, 201],[27, 205]]) as Theme

export const dark_red_ListItem = n203 as Theme
const n204 = t([[12, 199],[13, 200],[14, 201],[15, 202],[16, 198],[17, 197],[18, 0],[19, 207],[20, 0],[21, 207],[22, 0],[23, 202],[24, 204],[25, 201],[26, 202],[27, 90]]) as Theme

export const dark_red_Card = n204 as Theme
export const dark_red_DrawerFrame = n204 as Theme
export const dark_red_Progress = n204 as Theme
export const dark_red_TooltipArrow = n204 as Theme
const n205 = t([[12, 200],[13, 201],[14, 202],[15, 204],[16, 199],[17, 198],[18, 0],[19, 207],[20, 0],[21, 207],[22, 207],[23, 266],[24, 266],[25, 202],[26, 204],[27, 204]]) as Theme

export const dark_red_Button = n205 as Theme
const n206 = t([[12, 200],[13, 201],[14, 202],[15, 204],[16, 199],[17, 198],[18, 0],[19, 207],[20, 0],[21, 207],[22, 207],[23, 204],[24, 90],[25, 202],[26, 204],[27, 204]]) as Theme

export const dark_red_Checkbox = n206 as Theme
export const dark_red_Switch = n206 as Theme
export const dark_red_TooltipContent = n206 as Theme
export const dark_red_SliderTrack = n206 as Theme
const n207 = t([[12, 0],[13, 0],[14, 207],[15, 206],[16, 0],[17, 0],[18, 197],[19, 198],[20, 197],[21, 198],[22, 197],[23, 206],[24, 205],[25, 207],[26, 206],[27, 198]]) as Theme

export const dark_red_SwitchThumb = n207 as Theme
const n208 = t([[12, 205],[13, 90],[14, 204],[15, 202],[16, 206],[17, 207],[18, 197],[19, 198],[20, 197],[21, 198],[22, 198],[23, 202],[24, 201],[25, 204],[26, 202],[27, 202]]) as Theme

export const dark_red_SliderTrackActive = n208 as Theme
const n209 = t([[12, 207],[13, 206],[14, 205],[15, 90],[16, 0],[17, 261],[18, 197],[19, 198],[20, 197],[21, 198],[22, 260],[23, 90],[24, 204],[25, 205],[26, 90],[27, 200]]) as Theme

export const dark_red_SliderThumb = n209 as Theme
export const dark_red_Tooltip = n209 as Theme
export const dark_red_ProgressIndicator = n209 as Theme
const n210 = t([[12, 198],[13, 199],[14, 200],[15, 201],[16, 197],[17, 260],[18, 0],[19, 207],[20, 0],[21, 207],[22, 261],[23, 202],[24, 204],[25, 201],[26, 202],[27, 205]]) as Theme

export const dark_red_Input = n210 as Theme
export const dark_red_TextArea = n210 as Theme
const n211 = t([[12, 220],[13, 221],[14, 222],[15, 223],[16, 219],[17, 262],[18, 0],[19, 229],[20, 0],[21, 229],[22, 263],[23, 223],[24, 224],[25, 222],[26, 223],[27, 227]]) as Theme

export const dark_gold_ListItem = n211 as Theme
const n212 = t([[12, 221],[13, 222],[14, 223],[15, 224],[16, 220],[17, 219],[18, 0],[19, 229],[20, 0],[21, 229],[22, 0],[23, 224],[24, 226],[25, 223],[26, 224],[27, 114]]) as Theme

export const dark_gold_Card = n212 as Theme
export const dark_gold_DrawerFrame = n212 as Theme
export const dark_gold_Progress = n212 as Theme
export const dark_gold_TooltipArrow = n212 as Theme
const n213 = t([[12, 222],[13, 223],[14, 224],[15, 226],[16, 221],[17, 220],[18, 0],[19, 229],[20, 0],[21, 229],[22, 229],[23, 266],[24, 266],[25, 224],[26, 226],[27, 226]]) as Theme

export const dark_gold_Button = n213 as Theme
const n214 = t([[12, 222],[13, 223],[14, 224],[15, 226],[16, 221],[17, 220],[18, 0],[19, 229],[20, 0],[21, 229],[22, 229],[23, 226],[24, 114],[25, 224],[26, 226],[27, 226]]) as Theme

export const dark_gold_Checkbox = n214 as Theme
export const dark_gold_Switch = n214 as Theme
export const dark_gold_TooltipContent = n214 as Theme
export const dark_gold_SliderTrack = n214 as Theme
const n215 = t([[12, 0],[13, 0],[14, 229],[15, 228],[16, 0],[17, 0],[18, 219],[19, 220],[20, 219],[21, 220],[22, 219],[23, 228],[24, 227],[25, 229],[26, 228],[27, 220]]) as Theme

export const dark_gold_SwitchThumb = n215 as Theme
const n216 = t([[12, 227],[13, 114],[14, 226],[15, 224],[16, 228],[17, 229],[18, 219],[19, 220],[20, 219],[21, 220],[22, 220],[23, 224],[24, 223],[25, 226],[26, 224],[27, 224]]) as Theme

export const dark_gold_SliderTrackActive = n216 as Theme
const n217 = t([[12, 229],[13, 228],[14, 227],[15, 114],[16, 0],[17, 263],[18, 219],[19, 220],[20, 219],[21, 220],[22, 262],[23, 114],[24, 226],[25, 227],[26, 114],[27, 222]]) as Theme

export const dark_gold_SliderThumb = n217 as Theme
export const dark_gold_Tooltip = n217 as Theme
export const dark_gold_ProgressIndicator = n217 as Theme
const n218 = t([[12, 220],[13, 221],[14, 222],[15, 223],[16, 219],[17, 262],[18, 0],[19, 229],[20, 0],[21, 229],[22, 263],[23, 224],[24, 226],[25, 223],[26, 224],[27, 227]]) as Theme

export const dark_gold_Input = n218 as Theme
export const dark_gold_TextArea = n218 as Theme
const n219 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8]]) as Theme

export const light_alt1_ListItem = n219 as Theme
const n220 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 10],[19, 9],[20, 10],[21, 9],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_alt1_Card = n220 as Theme
export const light_alt1_DrawerFrame = n220 as Theme
export const light_alt1_Progress = n220 as Theme
export const light_alt1_TooltipArrow = n220 as Theme
const n221 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 266],[24, 266],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_alt1_Button = n221 as Theme
const n222 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_alt1_Checkbox = n222 as Theme
export const light_alt1_Switch = n222 as Theme
export const light_alt1_TooltipContent = n222 as Theme
export const light_alt1_SliderTrack = n222 as Theme
const n223 = t([[12, 11],[13, 10],[14, 9],[15, 8],[16, 11],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 8],[24, 7],[25, 9],[26, 8],[27, 2]]) as Theme

export const light_alt1_SwitchThumb = n223 as Theme
const n224 = t([[12, 7],[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[18, 1],[19, 2],[20, 1],[21, 2],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]]) as Theme

export const light_alt1_SliderTrackActive = n224 as Theme
const n225 = t([[12, 9],[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]]) as Theme

export const light_alt1_SliderThumb = n225 as Theme
export const light_alt1_Tooltip = n225 as Theme
export const light_alt1_ProgressIndicator = n225 as Theme
const n226 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 6],[24, 7],[25, 5],[26, 6],[27, 8]]) as Theme

export const light_alt1_Input = n226 as Theme
export const light_alt1_TextArea = n226 as Theme
const n227 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 9],[19, 8],[20, 9],[21, 8],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_alt2_ListItem = n227 as Theme
const n228 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 9],[19, 8],[20, 9],[21, 8],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_alt2_Card = n228 as Theme
export const light_alt2_DrawerFrame = n228 as Theme
export const light_alt2_Progress = n228 as Theme
export const light_alt2_TooltipArrow = n228 as Theme
const n229 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 266],[24, 266],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_alt2_Button = n229 as Theme
const n230 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 8],[24, 9],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_alt2_Checkbox = n230 as Theme
export const light_alt2_Switch = n230 as Theme
export const light_alt2_TooltipContent = n230 as Theme
export const light_alt2_SliderTrack = n230 as Theme
const n231 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 11],[18, 2],[19, 3],[20, 2],[21, 3],[22, 0],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]]) as Theme

export const light_alt2_SwitchThumb = n231 as Theme
const n232 = t([[12, 6],[13, 5],[14, 4],[15, 3],[16, 7],[17, 8],[18, 2],[19, 3],[20, 2],[21, 3],[22, 3],[23, 3],[24, 2],[25, 4],[26, 3],[27, 7]]) as Theme

export const light_alt2_SliderTrackActive = n232 as Theme
const n233 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 2],[19, 3],[20, 2],[21, 3],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]]) as Theme

export const light_alt2_SliderThumb = n233 as Theme
export const light_alt2_Tooltip = n233 as Theme
export const light_alt2_ProgressIndicator = n233 as Theme
const n234 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 9],[19, 8],[20, 9],[21, 8],[22, 11],[23, 7],[24, 8],[25, 6],[26, 7],[27, 7]]) as Theme

export const light_alt2_Input = n234 as Theme
export const light_alt2_TextArea = n234 as Theme
const n235 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[19, 7],[20, 8],[21, 7],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_active_ListItem = n235 as Theme
const n236 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[19, 7],[20, 8],[21, 7],[22, 8],[23, 8],[24, 9],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_active_Card = n236 as Theme
export const light_active_DrawerFrame = n236 as Theme
export const light_active_Progress = n236 as Theme
export const light_active_TooltipArrow = n236 as Theme
const n237 = t([[12, 6],[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 266],[24, 266],[25, 8],[26, 9],[27, 3]]) as Theme

export const light_active_Button = n237 as Theme
const n238 = t([[12, 6],[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 9],[24, 10],[25, 8],[26, 9],[27, 3]]) as Theme

export const light_active_Checkbox = n238 as Theme
export const light_active_Switch = n238 as Theme
export const light_active_TooltipContent = n238 as Theme
export const light_active_SliderTrack = n238 as Theme
const n239 = t([[12, 9],[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[19, 4],[20, 3],[21, 4],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]]) as Theme

export const light_active_SwitchThumb = n239 as Theme
const n240 = t([[12, 5],[13, 4],[14, 3],[15, 2],[16, 6],[17, 7],[19, 4],[20, 3],[21, 4],[22, 4],[23, 2],[24, 1],[25, 3],[26, 2],[27, 8]]) as Theme

export const light_active_SliderTrackActive = n240 as Theme
const n241 = t([[12, 7],[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[19, 4],[20, 3],[21, 4],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]]) as Theme

export const light_active_SliderThumb = n241 as Theme
export const light_active_Tooltip = n241 as Theme
export const light_active_ProgressIndicator = n241 as Theme
const n242 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[19, 7],[20, 8],[21, 7],[22, 10],[23, 8],[24, 9],[25, 7],[26, 8],[27, 6]]) as Theme

export const light_active_Input = n242 as Theme
export const light_active_TextArea = n242 as Theme
const n243 = t([[12, 122],[13, 123],[14, 124],[15, 125],[16, 121],[17, 120],[18, 130],[19, 129],[20, 130],[21, 129],[22, 0],[23, 125],[24, 126],[25, 124],[26, 125],[27, 127]]) as Theme

export const dark_alt1_ListItem = n243 as Theme
const n244 = t([[12, 123],[13, 124],[14, 125],[15, 126],[16, 122],[17, 121],[18, 130],[19, 129],[20, 130],[21, 129],[22, 130],[23, 126],[24, 127],[25, 125],[26, 126],[27, 126]]) as Theme

export const dark_alt1_Card = n244 as Theme
export const dark_alt1_DrawerFrame = n244 as Theme
export const dark_alt1_Progress = n244 as Theme
export const dark_alt1_TooltipArrow = n244 as Theme
const n245 = t([[12, 124],[13, 125],[14, 126],[15, 127],[16, 123],[17, 122],[18, 130],[19, 129],[20, 130],[21, 129],[22, 129],[23, 266],[24, 266],[25, 126],[26, 127],[27, 125]]) as Theme

export const dark_alt1_Button = n245 as Theme
const n246 = t([[12, 124],[13, 125],[14, 126],[15, 127],[16, 123],[17, 122],[18, 130],[19, 129],[20, 130],[21, 129],[22, 129],[23, 127],[24, 128],[25, 126],[26, 127],[27, 125]]) as Theme

export const dark_alt1_Checkbox = n246 as Theme
export const dark_alt1_Switch = n246 as Theme
export const dark_alt1_TooltipContent = n246 as Theme
export const dark_alt1_SliderTrack = n246 as Theme
const n247 = t([[12, 0],[13, 130],[14, 129],[15, 128],[16, 0],[17, 0],[18, 121],[19, 122],[20, 121],[21, 122],[22, 120],[23, 128],[24, 127],[25, 129],[26, 128],[27, 122]]) as Theme

export const dark_alt1_SwitchThumb = n247 as Theme
const n248 = t([[12, 127],[13, 126],[14, 125],[15, 124],[16, 128],[17, 129],[18, 121],[19, 122],[20, 121],[21, 122],[22, 122],[23, 124],[24, 123],[25, 125],[26, 124],[27, 126]]) as Theme

export const dark_alt1_SliderTrackActive = n248 as Theme
const n249 = t([[12, 129],[13, 128],[14, 127],[15, 126],[16, 130],[17, 0],[18, 121],[19, 122],[20, 121],[21, 122],[22, 120],[23, 126],[24, 125],[25, 127],[26, 126],[27, 124]]) as Theme

export const dark_alt1_SliderThumb = n249 as Theme
export const dark_alt1_Tooltip = n249 as Theme
export const dark_alt1_ProgressIndicator = n249 as Theme
const n250 = t([[12, 122],[13, 123],[14, 124],[15, 125],[16, 121],[17, 120],[18, 130],[19, 129],[20, 130],[21, 129],[22, 0],[23, 126],[24, 127],[25, 125],[26, 126],[27, 127]]) as Theme

export const dark_alt1_Input = n250 as Theme
export const dark_alt1_TextArea = n250 as Theme
const n251 = t([[12, 123],[13, 124],[14, 125],[15, 126],[16, 122],[17, 121],[18, 129],[19, 128],[20, 129],[21, 128],[22, 130],[23, 126],[24, 127],[25, 125],[26, 126],[27, 126]]) as Theme

export const dark_alt2_ListItem = n251 as Theme
const n252 = t([[12, 124],[13, 125],[14, 126],[15, 127],[16, 123],[17, 122],[18, 129],[19, 128],[20, 129],[21, 128],[22, 129],[23, 127],[24, 128],[25, 126],[26, 127],[27, 125]]) as Theme

export const dark_alt2_Card = n252 as Theme
export const dark_alt2_DrawerFrame = n252 as Theme
export const dark_alt2_Progress = n252 as Theme
export const dark_alt2_TooltipArrow = n252 as Theme
const n253 = t([[12, 125],[13, 126],[14, 127],[15, 128],[16, 124],[17, 123],[18, 129],[19, 128],[20, 129],[21, 128],[22, 128],[23, 266],[24, 266],[25, 127],[26, 128],[27, 124]]) as Theme

export const dark_alt2_Button = n253 as Theme
const n254 = t([[12, 125],[13, 126],[14, 127],[15, 128],[16, 124],[17, 123],[18, 129],[19, 128],[20, 129],[21, 128],[22, 128],[23, 128],[24, 129],[25, 127],[26, 128],[27, 124]]) as Theme

export const dark_alt2_Checkbox = n254 as Theme
export const dark_alt2_Switch = n254 as Theme
export const dark_alt2_TooltipContent = n254 as Theme
export const dark_alt2_SliderTrack = n254 as Theme
const n255 = t([[12, 130],[13, 129],[14, 128],[15, 127],[16, 0],[17, 0],[18, 122],[19, 123],[20, 122],[21, 123],[22, 120],[23, 127],[24, 126],[25, 128],[26, 127],[27, 123]]) as Theme

export const dark_alt2_SwitchThumb = n255 as Theme
const n256 = t([[12, 126],[13, 125],[14, 124],[15, 123],[16, 127],[17, 128],[18, 122],[19, 123],[20, 122],[21, 123],[22, 123],[23, 123],[24, 122],[25, 124],[26, 123],[27, 127]]) as Theme

export const dark_alt2_SliderTrackActive = n256 as Theme
const n257 = t([[12, 128],[13, 127],[14, 126],[15, 125],[16, 129],[17, 130],[18, 122],[19, 123],[20, 122],[21, 123],[22, 121],[23, 125],[24, 124],[25, 126],[26, 125],[27, 125]]) as Theme

export const dark_alt2_SliderThumb = n257 as Theme
export const dark_alt2_Tooltip = n257 as Theme
export const dark_alt2_ProgressIndicator = n257 as Theme
const n258 = t([[12, 123],[13, 124],[14, 125],[15, 126],[16, 122],[17, 121],[18, 129],[19, 128],[20, 129],[21, 128],[22, 130],[23, 127],[24, 128],[25, 126],[26, 127],[27, 126]]) as Theme

export const dark_alt2_Input = n258 as Theme
export const dark_alt2_TextArea = n258 as Theme
const n259 = t([[12, 124],[13, 125],[14, 126],[15, 127],[16, 123],[17, 122],[19, 127],[20, 128],[21, 127],[22, 129],[23, 127],[24, 128],[25, 126],[26, 127],[27, 125]]) as Theme

export const dark_active_ListItem = n259 as Theme
const n260 = t([[12, 125],[13, 126],[14, 127],[15, 128],[16, 124],[17, 123],[19, 127],[20, 128],[21, 127],[22, 128],[23, 128],[24, 129],[25, 127],[26, 128],[27, 124]]) as Theme

export const dark_active_Card = n260 as Theme
export const dark_active_DrawerFrame = n260 as Theme
export const dark_active_Progress = n260 as Theme
export const dark_active_TooltipArrow = n260 as Theme
const n261 = t([[12, 126],[13, 127],[14, 128],[15, 129],[16, 125],[17, 124],[19, 127],[20, 128],[21, 127],[22, 127],[23, 266],[24, 266],[25, 128],[26, 129],[27, 123]]) as Theme

export const dark_active_Button = n261 as Theme
const n262 = t([[12, 126],[13, 127],[14, 128],[15, 129],[16, 125],[17, 124],[19, 127],[20, 128],[21, 127],[22, 127],[23, 129],[24, 130],[25, 128],[26, 129],[27, 123]]) as Theme

export const dark_active_Checkbox = n262 as Theme
export const dark_active_Switch = n262 as Theme
export const dark_active_TooltipContent = n262 as Theme
export const dark_active_SliderTrack = n262 as Theme
const n263 = t([[12, 129],[13, 128],[14, 127],[15, 126],[16, 130],[17, 0],[19, 124],[20, 123],[21, 124],[22, 120],[23, 126],[24, 125],[25, 127],[26, 126],[27, 124]]) as Theme

export const dark_active_SwitchThumb = n263 as Theme
const n264 = t([[12, 125],[13, 124],[14, 123],[15, 122],[16, 126],[17, 127],[19, 124],[20, 123],[21, 124],[22, 124],[23, 122],[24, 121],[25, 123],[26, 122],[27, 128]]) as Theme

export const dark_active_SliderTrackActive = n264 as Theme
const n265 = t([[12, 127],[13, 126],[14, 125],[15, 124],[16, 128],[17, 129],[19, 124],[20, 123],[21, 124],[22, 122],[23, 124],[24, 123],[25, 125],[26, 124],[27, 126]]) as Theme

export const dark_active_SliderThumb = n265 as Theme
export const dark_active_Tooltip = n265 as Theme
export const dark_active_ProgressIndicator = n265 as Theme
const n266 = t([[12, 124],[13, 125],[14, 126],[15, 127],[16, 123],[17, 122],[19, 127],[20, 128],[21, 127],[22, 129],[23, 128],[24, 129],[25, 127],[26, 128],[27, 125]]) as Theme

export const dark_active_Input = n266 as Theme
export const dark_active_TextArea = n266 as Theme
const n267 = t([[12, 47],[13, 48],[14, 49],[15, 50],[16, 46],[17, 46],[18, 57],[19, 56],[20, 57],[21, 56],[22, 11],[23, 49],[24, 50],[25, 49],[26, 49],[27, 55]]) as Theme

export const light_orange_alt1_ListItem = n267 as Theme
const n268 = t([[12, 49],[13, 50],[14, 51],[15, 53],[16, 48],[17, 47],[18, 57],[19, 56],[20, 57],[21, 56],[22, 57],[23, 51],[24, 53],[25, 51],[26, 51],[27, 53]]) as Theme

export const light_orange_alt1_Card = n268 as Theme
export const light_orange_alt1_DrawerFrame = n268 as Theme
export const light_orange_alt1_Progress = n268 as Theme
export const light_orange_alt1_TooltipArrow = n268 as Theme
const n269 = t([[12, 50],[13, 51],[14, 53],[15, 54],[16, 49],[17, 48],[18, 57],[19, 56],[20, 57],[21, 56],[22, 56],[23, 266],[24, 266],[25, 53],[26, 53],[27, 51]]) as Theme

export const light_orange_alt1_Button = n269 as Theme
const n270 = t([[12, 50],[13, 51],[14, 53],[15, 54],[16, 49],[17, 48],[18, 57],[19, 56],[20, 57],[21, 56],[22, 56],[23, 53],[24, 54],[25, 53],[26, 53],[27, 51]]) as Theme

export const light_orange_alt1_Checkbox = n270 as Theme
export const light_orange_alt1_Switch = n270 as Theme
export const light_orange_alt1_TooltipContent = n270 as Theme
export const light_orange_alt1_SliderTrack = n270 as Theme
const n271 = t([[12, 11],[13, 57],[14, 56],[15, 55],[16, 11],[17, 11],[18, 47],[19, 48],[20, 47],[21, 48],[22, 46],[23, 56],[24, 55],[25, 56],[26, 56],[27, 48]]) as Theme

export const light_orange_alt1_SwitchThumb = n271 as Theme
const n272 = t([[12, 54],[13, 53],[14, 51],[15, 50],[16, 55],[17, 56],[18, 47],[19, 48],[20, 47],[21, 48],[22, 48],[23, 51],[24, 50],[25, 51],[26, 51],[27, 53]]) as Theme

export const light_orange_alt1_SliderTrackActive = n272 as Theme
const n273 = t([[12, 56],[13, 55],[14, 54],[15, 53],[16, 57],[17, 11],[18, 47],[19, 48],[20, 47],[21, 48],[22, 46],[23, 54],[24, 53],[25, 54],[26, 54],[27, 50]]) as Theme

export const light_orange_alt1_SliderThumb = n273 as Theme
export const light_orange_alt1_Tooltip = n273 as Theme
export const light_orange_alt1_ProgressIndicator = n273 as Theme
const n274 = t([[12, 47],[13, 48],[14, 49],[15, 50],[16, 46],[17, 46],[18, 57],[19, 56],[20, 57],[21, 56],[22, 11],[23, 51],[24, 53],[25, 51],[26, 51],[27, 55]]) as Theme

export const light_orange_alt1_Input = n274 as Theme
export const light_orange_alt1_TextArea = n274 as Theme
const n275 = t([[12, 48],[13, 49],[14, 50],[15, 51],[16, 47],[17, 46],[18, 56],[19, 55],[20, 56],[21, 55],[22, 11],[23, 50],[24, 51],[25, 50],[26, 50],[27, 54]]) as Theme

export const light_orange_alt2_ListItem = n275 as Theme
const n276 = t([[12, 50],[13, 51],[14, 53],[15, 54],[16, 49],[17, 48],[18, 56],[19, 55],[20, 56],[21, 55],[22, 56],[23, 53],[24, 54],[25, 53],[26, 53],[27, 51]]) as Theme

export const light_orange_alt2_Card = n276 as Theme
export const light_orange_alt2_DrawerFrame = n276 as Theme
export const light_orange_alt2_Progress = n276 as Theme
export const light_orange_alt2_TooltipArrow = n276 as Theme
const n277 = t([[12, 51],[13, 53],[14, 54],[15, 55],[16, 50],[17, 49],[18, 56],[19, 55],[20, 56],[21, 55],[22, 55],[23, 266],[24, 266],[25, 54],[26, 54],[27, 50]]) as Theme

export const light_orange_alt2_Button = n277 as Theme
const n278 = t([[12, 51],[13, 53],[14, 54],[15, 55],[16, 50],[17, 49],[18, 56],[19, 55],[20, 56],[21, 55],[22, 55],[23, 54],[24, 55],[25, 54],[26, 54],[27, 50]]) as Theme

export const light_orange_alt2_Checkbox = n278 as Theme
export const light_orange_alt2_Switch = n278 as Theme
export const light_orange_alt2_TooltipContent = n278 as Theme
export const light_orange_alt2_SliderTrack = n278 as Theme
const n279 = t([[12, 57],[13, 56],[14, 55],[15, 54],[16, 11],[17, 11],[18, 48],[19, 49],[20, 48],[21, 49],[22, 46],[23, 55],[24, 54],[25, 55],[26, 55],[27, 49]]) as Theme

export const light_orange_alt2_SwitchThumb = n279 as Theme
const n280 = t([[12, 53],[13, 51],[14, 50],[15, 49],[16, 54],[17, 55],[18, 48],[19, 49],[20, 48],[21, 49],[22, 49],[23, 50],[24, 49],[25, 50],[26, 50],[27, 54]]) as Theme

export const light_orange_alt2_SliderTrackActive = n280 as Theme
const n281 = t([[12, 55],[13, 54],[14, 53],[15, 51],[16, 56],[17, 57],[18, 48],[19, 49],[20, 48],[21, 49],[22, 47],[23, 53],[24, 51],[25, 53],[26, 53],[27, 51]]) as Theme

export const light_orange_alt2_SliderThumb = n281 as Theme
export const light_orange_alt2_Tooltip = n281 as Theme
export const light_orange_alt2_ProgressIndicator = n281 as Theme
const n282 = t([[12, 48],[13, 49],[14, 50],[15, 51],[16, 47],[17, 46],[18, 56],[19, 55],[20, 56],[21, 55],[22, 11],[23, 53],[24, 54],[25, 53],[26, 53],[27, 54]]) as Theme

export const light_orange_alt2_Input = n282 as Theme
export const light_orange_alt2_TextArea = n282 as Theme
const n283 = t([[12, 49],[13, 50],[14, 51],[15, 53],[16, 48],[17, 47],[19, 54],[20, 55],[21, 54],[22, 57],[23, 51],[24, 53],[25, 51],[26, 51],[27, 53]]) as Theme

export const light_orange_active_ListItem = n283 as Theme
const n284 = t([[12, 51],[13, 53],[14, 54],[15, 55],[16, 50],[17, 49],[19, 54],[20, 55],[21, 54],[22, 55],[23, 54],[24, 55],[25, 54],[26, 54],[27, 50]]) as Theme

export const light_orange_active_Card = n284 as Theme
export const light_orange_active_DrawerFrame = n284 as Theme
export const light_orange_active_Progress = n284 as Theme
export const light_orange_active_TooltipArrow = n284 as Theme
const n285 = t([[12, 53],[13, 54],[14, 55],[15, 56],[16, 51],[17, 50],[19, 54],[20, 55],[21, 54],[22, 54],[23, 266],[24, 266],[25, 55],[26, 55],[27, 49]]) as Theme

export const light_orange_active_Button = n285 as Theme
const n286 = t([[12, 53],[13, 54],[14, 55],[15, 56],[16, 51],[17, 50],[19, 54],[20, 55],[21, 54],[22, 54],[23, 55],[24, 56],[25, 55],[26, 55],[27, 49]]) as Theme

export const light_orange_active_Checkbox = n286 as Theme
export const light_orange_active_Switch = n286 as Theme
export const light_orange_active_TooltipContent = n286 as Theme
export const light_orange_active_SliderTrack = n286 as Theme
const n287 = t([[12, 56],[13, 55],[14, 54],[15, 53],[16, 57],[17, 11],[19, 50],[20, 49],[21, 50],[22, 46],[23, 54],[24, 53],[25, 54],[26, 54],[27, 50]]) as Theme

export const light_orange_active_SwitchThumb = n287 as Theme
const n288 = t([[12, 51],[13, 50],[14, 49],[15, 48],[16, 53],[17, 54],[19, 50],[20, 49],[21, 50],[22, 50],[23, 49],[24, 48],[25, 49],[26, 49],[27, 55]]) as Theme

export const light_orange_active_SliderTrackActive = n288 as Theme
const n289 = t([[12, 54],[13, 53],[14, 51],[15, 50],[16, 55],[17, 56],[19, 50],[20, 49],[21, 50],[22, 48],[23, 51],[24, 50],[25, 51],[26, 51],[27, 53]]) as Theme

export const light_orange_active_SliderThumb = n289 as Theme
export const light_orange_active_Tooltip = n289 as Theme
export const light_orange_active_ProgressIndicator = n289 as Theme
const n290 = t([[12, 49],[13, 50],[14, 51],[15, 53],[16, 48],[17, 47],[19, 54],[20, 55],[21, 54],[22, 57],[23, 54],[24, 55],[25, 54],[26, 54],[27, 53]]) as Theme

export const light_orange_active_Input = n290 as Theme
export const light_orange_active_TextArea = n290 as Theme
const n291 = t([[12, 95],[13, 96],[14, 97],[15, 98],[16, 94],[17, 94],[18, 105],[19, 104],[20, 105],[21, 104],[22, 11],[23, 97],[24, 98],[25, 97],[26, 97],[27, 103]]) as Theme

export const light_yellow_alt1_ListItem = n291 as Theme
const n292 = t([[12, 97],[13, 98],[14, 99],[15, 101],[16, 96],[17, 95],[18, 105],[19, 104],[20, 105],[21, 104],[22, 105],[23, 99],[24, 101],[25, 99],[26, 99],[27, 101]]) as Theme

export const light_yellow_alt1_Card = n292 as Theme
export const light_yellow_alt1_DrawerFrame = n292 as Theme
export const light_yellow_alt1_Progress = n292 as Theme
export const light_yellow_alt1_TooltipArrow = n292 as Theme
const n293 = t([[12, 98],[13, 99],[14, 101],[15, 102],[16, 97],[17, 96],[18, 105],[19, 104],[20, 105],[21, 104],[22, 104],[23, 266],[24, 266],[25, 101],[26, 101],[27, 99]]) as Theme

export const light_yellow_alt1_Button = n293 as Theme
const n294 = t([[12, 98],[13, 99],[14, 101],[15, 102],[16, 97],[17, 96],[18, 105],[19, 104],[20, 105],[21, 104],[22, 104],[23, 101],[24, 102],[25, 101],[26, 101],[27, 99]]) as Theme

export const light_yellow_alt1_Checkbox = n294 as Theme
export const light_yellow_alt1_Switch = n294 as Theme
export const light_yellow_alt1_TooltipContent = n294 as Theme
export const light_yellow_alt1_SliderTrack = n294 as Theme
const n295 = t([[12, 11],[13, 105],[14, 104],[15, 103],[16, 11],[17, 11],[18, 95],[19, 96],[20, 95],[21, 96],[22, 94],[23, 104],[24, 103],[25, 104],[26, 104],[27, 96]]) as Theme

export const light_yellow_alt1_SwitchThumb = n295 as Theme
const n296 = t([[12, 102],[13, 101],[14, 99],[15, 98],[16, 103],[17, 104],[18, 95],[19, 96],[20, 95],[21, 96],[22, 96],[23, 99],[24, 98],[25, 99],[26, 99],[27, 101]]) as Theme

export const light_yellow_alt1_SliderTrackActive = n296 as Theme
const n297 = t([[12, 104],[13, 103],[14, 102],[15, 101],[16, 105],[17, 11],[18, 95],[19, 96],[20, 95],[21, 96],[22, 94],[23, 102],[24, 101],[25, 102],[26, 102],[27, 98]]) as Theme

export const light_yellow_alt1_SliderThumb = n297 as Theme
export const light_yellow_alt1_Tooltip = n297 as Theme
export const light_yellow_alt1_ProgressIndicator = n297 as Theme
const n298 = t([[12, 95],[13, 96],[14, 97],[15, 98],[16, 94],[17, 94],[18, 105],[19, 104],[20, 105],[21, 104],[22, 11],[23, 99],[24, 101],[25, 99],[26, 99],[27, 103]]) as Theme

export const light_yellow_alt1_Input = n298 as Theme
export const light_yellow_alt1_TextArea = n298 as Theme
const n299 = t([[12, 96],[13, 97],[14, 98],[15, 99],[16, 95],[17, 94],[18, 104],[19, 103],[20, 104],[21, 103],[22, 11],[23, 98],[24, 99],[25, 98],[26, 98],[27, 102]]) as Theme

export const light_yellow_alt2_ListItem = n299 as Theme
const n300 = t([[12, 98],[13, 99],[14, 101],[15, 102],[16, 97],[17, 96],[18, 104],[19, 103],[20, 104],[21, 103],[22, 104],[23, 101],[24, 102],[25, 101],[26, 101],[27, 99]]) as Theme

export const light_yellow_alt2_Card = n300 as Theme
export const light_yellow_alt2_DrawerFrame = n300 as Theme
export const light_yellow_alt2_Progress = n300 as Theme
export const light_yellow_alt2_TooltipArrow = n300 as Theme
const n301 = t([[12, 99],[13, 101],[14, 102],[15, 103],[16, 98],[17, 97],[18, 104],[19, 103],[20, 104],[21, 103],[22, 103],[23, 266],[24, 266],[25, 102],[26, 102],[27, 98]]) as Theme

export const light_yellow_alt2_Button = n301 as Theme
const n302 = t([[12, 99],[13, 101],[14, 102],[15, 103],[16, 98],[17, 97],[18, 104],[19, 103],[20, 104],[21, 103],[22, 103],[23, 102],[24, 103],[25, 102],[26, 102],[27, 98]]) as Theme

export const light_yellow_alt2_Checkbox = n302 as Theme
export const light_yellow_alt2_Switch = n302 as Theme
export const light_yellow_alt2_TooltipContent = n302 as Theme
export const light_yellow_alt2_SliderTrack = n302 as Theme
const n303 = t([[12, 105],[13, 104],[14, 103],[15, 102],[16, 11],[17, 11],[18, 96],[19, 97],[20, 96],[21, 97],[22, 94],[23, 103],[24, 102],[25, 103],[26, 103],[27, 97]]) as Theme

export const light_yellow_alt2_SwitchThumb = n303 as Theme
const n304 = t([[12, 101],[13, 99],[14, 98],[15, 97],[16, 102],[17, 103],[18, 96],[19, 97],[20, 96],[21, 97],[22, 97],[23, 98],[24, 97],[25, 98],[26, 98],[27, 102]]) as Theme

export const light_yellow_alt2_SliderTrackActive = n304 as Theme
const n305 = t([[12, 103],[13, 102],[14, 101],[15, 99],[16, 104],[17, 105],[18, 96],[19, 97],[20, 96],[21, 97],[22, 95],[23, 101],[24, 99],[25, 101],[26, 101],[27, 99]]) as Theme

export const light_yellow_alt2_SliderThumb = n305 as Theme
export const light_yellow_alt2_Tooltip = n305 as Theme
export const light_yellow_alt2_ProgressIndicator = n305 as Theme
const n306 = t([[12, 96],[13, 97],[14, 98],[15, 99],[16, 95],[17, 94],[18, 104],[19, 103],[20, 104],[21, 103],[22, 11],[23, 101],[24, 102],[25, 101],[26, 101],[27, 102]]) as Theme

export const light_yellow_alt2_Input = n306 as Theme
export const light_yellow_alt2_TextArea = n306 as Theme
const n307 = t([[12, 97],[13, 98],[14, 99],[15, 101],[16, 96],[17, 95],[19, 102],[20, 103],[21, 102],[22, 105],[23, 99],[24, 101],[25, 99],[26, 99],[27, 101]]) as Theme

export const light_yellow_active_ListItem = n307 as Theme
const n308 = t([[12, 99],[13, 101],[14, 102],[15, 103],[16, 98],[17, 97],[19, 102],[20, 103],[21, 102],[22, 103],[23, 102],[24, 103],[25, 102],[26, 102],[27, 98]]) as Theme

export const light_yellow_active_Card = n308 as Theme
export const light_yellow_active_DrawerFrame = n308 as Theme
export const light_yellow_active_Progress = n308 as Theme
export const light_yellow_active_TooltipArrow = n308 as Theme
const n309 = t([[12, 101],[13, 102],[14, 103],[15, 104],[16, 99],[17, 98],[19, 102],[20, 103],[21, 102],[22, 102],[23, 266],[24, 266],[25, 103],[26, 103],[27, 97]]) as Theme

export const light_yellow_active_Button = n309 as Theme
const n310 = t([[12, 101],[13, 102],[14, 103],[15, 104],[16, 99],[17, 98],[19, 102],[20, 103],[21, 102],[22, 102],[23, 103],[24, 104],[25, 103],[26, 103],[27, 97]]) as Theme

export const light_yellow_active_Checkbox = n310 as Theme
export const light_yellow_active_Switch = n310 as Theme
export const light_yellow_active_TooltipContent = n310 as Theme
export const light_yellow_active_SliderTrack = n310 as Theme
const n311 = t([[12, 104],[13, 103],[14, 102],[15, 101],[16, 105],[17, 11],[19, 98],[20, 97],[21, 98],[22, 94],[23, 102],[24, 101],[25, 102],[26, 102],[27, 98]]) as Theme

export const light_yellow_active_SwitchThumb = n311 as Theme
const n312 = t([[12, 99],[13, 98],[14, 97],[15, 96],[16, 101],[17, 102],[19, 98],[20, 97],[21, 98],[22, 98],[23, 97],[24, 96],[25, 97],[26, 97],[27, 103]]) as Theme

export const light_yellow_active_SliderTrackActive = n312 as Theme
const n313 = t([[12, 102],[13, 101],[14, 99],[15, 98],[16, 103],[17, 104],[19, 98],[20, 97],[21, 98],[22, 96],[23, 99],[24, 98],[25, 99],[26, 99],[27, 101]]) as Theme

export const light_yellow_active_SliderThumb = n313 as Theme
export const light_yellow_active_Tooltip = n313 as Theme
export const light_yellow_active_ProgressIndicator = n313 as Theme
const n314 = t([[12, 97],[13, 98],[14, 99],[15, 101],[16, 96],[17, 95],[19, 102],[20, 103],[21, 102],[22, 105],[23, 102],[24, 103],[25, 102],[26, 102],[27, 101]]) as Theme

export const light_yellow_active_Input = n314 as Theme
export const light_yellow_active_TextArea = n314 as Theme
const n315 = t([[12, 35],[13, 36],[14, 37],[15, 38],[16, 34],[17, 34],[18, 45],[19, 44],[20, 45],[21, 44],[22, 11],[23, 37],[24, 38],[25, 37],[26, 37],[27, 43]]) as Theme

export const light_green_alt1_ListItem = n315 as Theme
const n316 = t([[12, 37],[13, 38],[14, 39],[15, 41],[16, 36],[17, 35],[18, 45],[19, 44],[20, 45],[21, 44],[22, 45],[23, 39],[24, 41],[25, 39],[26, 39],[27, 41]]) as Theme

export const light_green_alt1_Card = n316 as Theme
export const light_green_alt1_DrawerFrame = n316 as Theme
export const light_green_alt1_Progress = n316 as Theme
export const light_green_alt1_TooltipArrow = n316 as Theme
const n317 = t([[12, 38],[13, 39],[14, 41],[15, 42],[16, 37],[17, 36],[18, 45],[19, 44],[20, 45],[21, 44],[22, 44],[23, 266],[24, 266],[25, 41],[26, 41],[27, 39]]) as Theme

export const light_green_alt1_Button = n317 as Theme
const n318 = t([[12, 38],[13, 39],[14, 41],[15, 42],[16, 37],[17, 36],[18, 45],[19, 44],[20, 45],[21, 44],[22, 44],[23, 41],[24, 42],[25, 41],[26, 41],[27, 39]]) as Theme

export const light_green_alt1_Checkbox = n318 as Theme
export const light_green_alt1_Switch = n318 as Theme
export const light_green_alt1_TooltipContent = n318 as Theme
export const light_green_alt1_SliderTrack = n318 as Theme
const n319 = t([[12, 11],[13, 45],[14, 44],[15, 43],[16, 11],[17, 11],[18, 35],[19, 36],[20, 35],[21, 36],[22, 34],[23, 44],[24, 43],[25, 44],[26, 44],[27, 36]]) as Theme

export const light_green_alt1_SwitchThumb = n319 as Theme
const n320 = t([[12, 42],[13, 41],[14, 39],[15, 38],[16, 43],[17, 44],[18, 35],[19, 36],[20, 35],[21, 36],[22, 36],[23, 39],[24, 38],[25, 39],[26, 39],[27, 41]]) as Theme

export const light_green_alt1_SliderTrackActive = n320 as Theme
const n321 = t([[12, 44],[13, 43],[14, 42],[15, 41],[16, 45],[17, 11],[18, 35],[19, 36],[20, 35],[21, 36],[22, 34],[23, 42],[24, 41],[25, 42],[26, 42],[27, 38]]) as Theme

export const light_green_alt1_SliderThumb = n321 as Theme
export const light_green_alt1_Tooltip = n321 as Theme
export const light_green_alt1_ProgressIndicator = n321 as Theme
const n322 = t([[12, 35],[13, 36],[14, 37],[15, 38],[16, 34],[17, 34],[18, 45],[19, 44],[20, 45],[21, 44],[22, 11],[23, 39],[24, 41],[25, 39],[26, 39],[27, 43]]) as Theme

export const light_green_alt1_Input = n322 as Theme
export const light_green_alt1_TextArea = n322 as Theme
const n323 = t([[12, 36],[13, 37],[14, 38],[15, 39],[16, 35],[17, 34],[18, 44],[19, 43],[20, 44],[21, 43],[22, 11],[23, 38],[24, 39],[25, 38],[26, 38],[27, 42]]) as Theme

export const light_green_alt2_ListItem = n323 as Theme
const n324 = t([[12, 38],[13, 39],[14, 41],[15, 42],[16, 37],[17, 36],[18, 44],[19, 43],[20, 44],[21, 43],[22, 44],[23, 41],[24, 42],[25, 41],[26, 41],[27, 39]]) as Theme

export const light_green_alt2_Card = n324 as Theme
export const light_green_alt2_DrawerFrame = n324 as Theme
export const light_green_alt2_Progress = n324 as Theme
export const light_green_alt2_TooltipArrow = n324 as Theme
const n325 = t([[12, 39],[13, 41],[14, 42],[15, 43],[16, 38],[17, 37],[18, 44],[19, 43],[20, 44],[21, 43],[22, 43],[23, 266],[24, 266],[25, 42],[26, 42],[27, 38]]) as Theme

export const light_green_alt2_Button = n325 as Theme
const n326 = t([[12, 39],[13, 41],[14, 42],[15, 43],[16, 38],[17, 37],[18, 44],[19, 43],[20, 44],[21, 43],[22, 43],[23, 42],[24, 43],[25, 42],[26, 42],[27, 38]]) as Theme

export const light_green_alt2_Checkbox = n326 as Theme
export const light_green_alt2_Switch = n326 as Theme
export const light_green_alt2_TooltipContent = n326 as Theme
export const light_green_alt2_SliderTrack = n326 as Theme
const n327 = t([[12, 45],[13, 44],[14, 43],[15, 42],[16, 11],[17, 11],[18, 36],[19, 37],[20, 36],[21, 37],[22, 34],[23, 43],[24, 42],[25, 43],[26, 43],[27, 37]]) as Theme

export const light_green_alt2_SwitchThumb = n327 as Theme
const n328 = t([[12, 41],[13, 39],[14, 38],[15, 37],[16, 42],[17, 43],[18, 36],[19, 37],[20, 36],[21, 37],[22, 37],[23, 38],[24, 37],[25, 38],[26, 38],[27, 42]]) as Theme

export const light_green_alt2_SliderTrackActive = n328 as Theme
const n329 = t([[12, 43],[13, 42],[14, 41],[15, 39],[16, 44],[17, 45],[18, 36],[19, 37],[20, 36],[21, 37],[22, 35],[23, 41],[24, 39],[25, 41],[26, 41],[27, 39]]) as Theme

export const light_green_alt2_SliderThumb = n329 as Theme
export const light_green_alt2_Tooltip = n329 as Theme
export const light_green_alt2_ProgressIndicator = n329 as Theme
const n330 = t([[12, 36],[13, 37],[14, 38],[15, 39],[16, 35],[17, 34],[18, 44],[19, 43],[20, 44],[21, 43],[22, 11],[23, 41],[24, 42],[25, 41],[26, 41],[27, 42]]) as Theme

export const light_green_alt2_Input = n330 as Theme
export const light_green_alt2_TextArea = n330 as Theme
const n331 = t([[12, 37],[13, 38],[14, 39],[15, 41],[16, 36],[17, 35],[19, 42],[20, 43],[21, 42],[22, 45],[23, 39],[24, 41],[25, 39],[26, 39],[27, 41]]) as Theme

export const light_green_active_ListItem = n331 as Theme
const n332 = t([[12, 39],[13, 41],[14, 42],[15, 43],[16, 38],[17, 37],[19, 42],[20, 43],[21, 42],[22, 43],[23, 42],[24, 43],[25, 42],[26, 42],[27, 38]]) as Theme

export const light_green_active_Card = n332 as Theme
export const light_green_active_DrawerFrame = n332 as Theme
export const light_green_active_Progress = n332 as Theme
export const light_green_active_TooltipArrow = n332 as Theme
const n333 = t([[12, 41],[13, 42],[14, 43],[15, 44],[16, 39],[17, 38],[19, 42],[20, 43],[21, 42],[22, 42],[23, 266],[24, 266],[25, 43],[26, 43],[27, 37]]) as Theme

export const light_green_active_Button = n333 as Theme
const n334 = t([[12, 41],[13, 42],[14, 43],[15, 44],[16, 39],[17, 38],[19, 42],[20, 43],[21, 42],[22, 42],[23, 43],[24, 44],[25, 43],[26, 43],[27, 37]]) as Theme

export const light_green_active_Checkbox = n334 as Theme
export const light_green_active_Switch = n334 as Theme
export const light_green_active_TooltipContent = n334 as Theme
export const light_green_active_SliderTrack = n334 as Theme
const n335 = t([[12, 44],[13, 43],[14, 42],[15, 41],[16, 45],[17, 11],[19, 38],[20, 37],[21, 38],[22, 34],[23, 42],[24, 41],[25, 42],[26, 42],[27, 38]]) as Theme

export const light_green_active_SwitchThumb = n335 as Theme
const n336 = t([[12, 39],[13, 38],[14, 37],[15, 36],[16, 41],[17, 42],[19, 38],[20, 37],[21, 38],[22, 38],[23, 37],[24, 36],[25, 37],[26, 37],[27, 43]]) as Theme

export const light_green_active_SliderTrackActive = n336 as Theme
const n337 = t([[12, 42],[13, 41],[14, 39],[15, 38],[16, 43],[17, 44],[19, 38],[20, 37],[21, 38],[22, 36],[23, 39],[24, 38],[25, 39],[26, 39],[27, 41]]) as Theme

export const light_green_active_SliderThumb = n337 as Theme
export const light_green_active_Tooltip = n337 as Theme
export const light_green_active_ProgressIndicator = n337 as Theme
const n338 = t([[12, 37],[13, 38],[14, 39],[15, 41],[16, 36],[17, 35],[19, 42],[20, 43],[21, 42],[22, 45],[23, 42],[24, 43],[25, 42],[26, 42],[27, 41]]) as Theme

export const light_green_active_Input = n338 as Theme
export const light_green_active_TextArea = n338 as Theme
const n339 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 17],[24, 18],[25, 17],[26, 17],[27, 23]]) as Theme

export const light_blue_alt1_ListItem = n339 as Theme
const n340 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 25],[19, 24],[20, 25],[21, 24],[22, 25],[23, 19],[24, 21],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_alt1_Card = n340 as Theme
export const light_blue_alt1_DrawerFrame = n340 as Theme
export const light_blue_alt1_Progress = n340 as Theme
export const light_blue_alt1_TooltipArrow = n340 as Theme
const n341 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[18, 25],[19, 24],[20, 25],[21, 24],[22, 24],[23, 266],[24, 266],[25, 21],[26, 21],[27, 19]]) as Theme

export const light_blue_alt1_Button = n341 as Theme
const n342 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[18, 25],[19, 24],[20, 25],[21, 24],[22, 24],[23, 21],[24, 22],[25, 21],[26, 21],[27, 19]]) as Theme

export const light_blue_alt1_Checkbox = n342 as Theme
export const light_blue_alt1_Switch = n342 as Theme
export const light_blue_alt1_TooltipContent = n342 as Theme
export const light_blue_alt1_SliderTrack = n342 as Theme
const n343 = t([[12, 11],[13, 25],[14, 24],[15, 23],[16, 11],[17, 11],[18, 15],[19, 16],[20, 15],[21, 16],[22, 14],[23, 24],[24, 23],[25, 24],[26, 24],[27, 16]]) as Theme

export const light_blue_alt1_SwitchThumb = n343 as Theme
const n344 = t([[12, 22],[13, 21],[14, 19],[15, 18],[16, 23],[17, 24],[18, 15],[19, 16],[20, 15],[21, 16],[22, 16],[23, 19],[24, 18],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_alt1_SliderTrackActive = n344 as Theme
const n345 = t([[12, 24],[13, 23],[14, 22],[15, 21],[16, 25],[17, 11],[18, 15],[19, 16],[20, 15],[21, 16],[22, 14],[23, 22],[24, 21],[25, 22],[26, 22],[27, 18]]) as Theme

export const light_blue_alt1_SliderThumb = n345 as Theme
export const light_blue_alt1_Tooltip = n345 as Theme
export const light_blue_alt1_ProgressIndicator = n345 as Theme
const n346 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 19],[24, 21],[25, 19],[26, 19],[27, 23]]) as Theme

export const light_blue_alt1_Input = n346 as Theme
export const light_blue_alt1_TextArea = n346 as Theme
const n347 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 24],[19, 23],[20, 24],[21, 23],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 22]]) as Theme

export const light_blue_alt2_ListItem = n347 as Theme
const n348 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[18, 24],[19, 23],[20, 24],[21, 23],[22, 24],[23, 21],[24, 22],[25, 21],[26, 21],[27, 19]]) as Theme

export const light_blue_alt2_Card = n348 as Theme
export const light_blue_alt2_DrawerFrame = n348 as Theme
export const light_blue_alt2_Progress = n348 as Theme
export const light_blue_alt2_TooltipArrow = n348 as Theme
const n349 = t([[12, 19],[13, 21],[14, 22],[15, 23],[16, 18],[17, 17],[18, 24],[19, 23],[20, 24],[21, 23],[22, 23],[23, 266],[24, 266],[25, 22],[26, 22],[27, 18]]) as Theme

export const light_blue_alt2_Button = n349 as Theme
const n350 = t([[12, 19],[13, 21],[14, 22],[15, 23],[16, 18],[17, 17],[18, 24],[19, 23],[20, 24],[21, 23],[22, 23],[23, 22],[24, 23],[25, 22],[26, 22],[27, 18]]) as Theme

export const light_blue_alt2_Checkbox = n350 as Theme
export const light_blue_alt2_Switch = n350 as Theme
export const light_blue_alt2_TooltipContent = n350 as Theme
export const light_blue_alt2_SliderTrack = n350 as Theme
const n351 = t([[12, 25],[13, 24],[14, 23],[15, 22],[16, 11],[17, 11],[18, 16],[19, 17],[20, 16],[21, 17],[22, 14],[23, 23],[24, 22],[25, 23],[26, 23],[27, 17]]) as Theme

export const light_blue_alt2_SwitchThumb = n351 as Theme
const n352 = t([[12, 21],[13, 19],[14, 18],[15, 17],[16, 22],[17, 23],[18, 16],[19, 17],[20, 16],[21, 17],[22, 17],[23, 18],[24, 17],[25, 18],[26, 18],[27, 22]]) as Theme

export const light_blue_alt2_SliderTrackActive = n352 as Theme
const n353 = t([[12, 23],[13, 22],[14, 21],[15, 19],[16, 24],[17, 25],[18, 16],[19, 17],[20, 16],[21, 17],[22, 15],[23, 21],[24, 19],[25, 21],[26, 21],[27, 19]]) as Theme

export const light_blue_alt2_SliderThumb = n353 as Theme
export const light_blue_alt2_Tooltip = n353 as Theme
export const light_blue_alt2_ProgressIndicator = n353 as Theme
const n354 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 24],[19, 23],[20, 24],[21, 23],[22, 11],[23, 21],[24, 22],[25, 21],[26, 21],[27, 22]]) as Theme

export const light_blue_alt2_Input = n354 as Theme
export const light_blue_alt2_TextArea = n354 as Theme
const n355 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[19, 22],[20, 23],[21, 22],[22, 25],[23, 19],[24, 21],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_active_ListItem = n355 as Theme
const n356 = t([[12, 19],[13, 21],[14, 22],[15, 23],[16, 18],[17, 17],[19, 22],[20, 23],[21, 22],[22, 23],[23, 22],[24, 23],[25, 22],[26, 22],[27, 18]]) as Theme

export const light_blue_active_Card = n356 as Theme
export const light_blue_active_DrawerFrame = n356 as Theme
export const light_blue_active_Progress = n356 as Theme
export const light_blue_active_TooltipArrow = n356 as Theme
const n357 = t([[12, 21],[13, 22],[14, 23],[15, 24],[16, 19],[17, 18],[19, 22],[20, 23],[21, 22],[22, 22],[23, 266],[24, 266],[25, 23],[26, 23],[27, 17]]) as Theme

export const light_blue_active_Button = n357 as Theme
const n358 = t([[12, 21],[13, 22],[14, 23],[15, 24],[16, 19],[17, 18],[19, 22],[20, 23],[21, 22],[22, 22],[23, 23],[24, 24],[25, 23],[26, 23],[27, 17]]) as Theme

export const light_blue_active_Checkbox = n358 as Theme
export const light_blue_active_Switch = n358 as Theme
export const light_blue_active_TooltipContent = n358 as Theme
export const light_blue_active_SliderTrack = n358 as Theme
const n359 = t([[12, 24],[13, 23],[14, 22],[15, 21],[16, 25],[17, 11],[19, 18],[20, 17],[21, 18],[22, 14],[23, 22],[24, 21],[25, 22],[26, 22],[27, 18]]) as Theme

export const light_blue_active_SwitchThumb = n359 as Theme
const n360 = t([[12, 19],[13, 18],[14, 17],[15, 16],[16, 21],[17, 22],[19, 18],[20, 17],[21, 18],[22, 18],[23, 17],[24, 16],[25, 17],[26, 17],[27, 23]]) as Theme

export const light_blue_active_SliderTrackActive = n360 as Theme
const n361 = t([[12, 22],[13, 21],[14, 19],[15, 18],[16, 23],[17, 24],[19, 18],[20, 17],[21, 18],[22, 16],[23, 19],[24, 18],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_active_SliderThumb = n361 as Theme
export const light_blue_active_Tooltip = n361 as Theme
export const light_blue_active_ProgressIndicator = n361 as Theme
const n362 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[19, 22],[20, 23],[21, 22],[22, 25],[23, 22],[24, 23],[25, 22],[26, 22],[27, 21]]) as Theme

export const light_blue_active_Input = n362 as Theme
export const light_blue_active_TextArea = n362 as Theme
const n363 = t([[12, 71],[13, 72],[14, 73],[15, 74],[16, 70],[17, 70],[18, 81],[19, 80],[20, 81],[21, 80],[22, 11],[23, 73],[24, 74],[25, 73],[26, 73],[27, 79]]) as Theme

export const light_purple_alt1_ListItem = n363 as Theme
const n364 = t([[12, 73],[13, 74],[14, 75],[15, 77],[16, 72],[17, 71],[18, 81],[19, 80],[20, 81],[21, 80],[22, 81],[23, 75],[24, 77],[25, 75],[26, 75],[27, 77]]) as Theme

export const light_purple_alt1_Card = n364 as Theme
export const light_purple_alt1_DrawerFrame = n364 as Theme
export const light_purple_alt1_Progress = n364 as Theme
export const light_purple_alt1_TooltipArrow = n364 as Theme
const n365 = t([[12, 74],[13, 75],[14, 77],[15, 78],[16, 73],[17, 72],[18, 81],[19, 80],[20, 81],[21, 80],[22, 80],[23, 266],[24, 266],[25, 77],[26, 77],[27, 75]]) as Theme

export const light_purple_alt1_Button = n365 as Theme
const n366 = t([[12, 74],[13, 75],[14, 77],[15, 78],[16, 73],[17, 72],[18, 81],[19, 80],[20, 81],[21, 80],[22, 80],[23, 77],[24, 78],[25, 77],[26, 77],[27, 75]]) as Theme

export const light_purple_alt1_Checkbox = n366 as Theme
export const light_purple_alt1_Switch = n366 as Theme
export const light_purple_alt1_TooltipContent = n366 as Theme
export const light_purple_alt1_SliderTrack = n366 as Theme
const n367 = t([[12, 11],[13, 81],[14, 80],[15, 79],[16, 11],[17, 11],[18, 71],[19, 72],[20, 71],[21, 72],[22, 70],[23, 80],[24, 79],[25, 80],[26, 80],[27, 72]]) as Theme

export const light_purple_alt1_SwitchThumb = n367 as Theme
const n368 = t([[12, 78],[13, 77],[14, 75],[15, 74],[16, 79],[17, 80],[18, 71],[19, 72],[20, 71],[21, 72],[22, 72],[23, 75],[24, 74],[25, 75],[26, 75],[27, 77]]) as Theme

export const light_purple_alt1_SliderTrackActive = n368 as Theme
const n369 = t([[12, 80],[13, 79],[14, 78],[15, 77],[16, 81],[17, 11],[18, 71],[19, 72],[20, 71],[21, 72],[22, 70],[23, 78],[24, 77],[25, 78],[26, 78],[27, 74]]) as Theme

export const light_purple_alt1_SliderThumb = n369 as Theme
export const light_purple_alt1_Tooltip = n369 as Theme
export const light_purple_alt1_ProgressIndicator = n369 as Theme
const n370 = t([[12, 71],[13, 72],[14, 73],[15, 74],[16, 70],[17, 70],[18, 81],[19, 80],[20, 81],[21, 80],[22, 11],[23, 75],[24, 77],[25, 75],[26, 75],[27, 79]]) as Theme

export const light_purple_alt1_Input = n370 as Theme
export const light_purple_alt1_TextArea = n370 as Theme
const n371 = t([[12, 72],[13, 73],[14, 74],[15, 75],[16, 71],[17, 70],[18, 80],[19, 79],[20, 80],[21, 79],[22, 11],[23, 74],[24, 75],[25, 74],[26, 74],[27, 78]]) as Theme

export const light_purple_alt2_ListItem = n371 as Theme
const n372 = t([[12, 74],[13, 75],[14, 77],[15, 78],[16, 73],[17, 72],[18, 80],[19, 79],[20, 80],[21, 79],[22, 80],[23, 77],[24, 78],[25, 77],[26, 77],[27, 75]]) as Theme

export const light_purple_alt2_Card = n372 as Theme
export const light_purple_alt2_DrawerFrame = n372 as Theme
export const light_purple_alt2_Progress = n372 as Theme
export const light_purple_alt2_TooltipArrow = n372 as Theme
const n373 = t([[12, 75],[13, 77],[14, 78],[15, 79],[16, 74],[17, 73],[18, 80],[19, 79],[20, 80],[21, 79],[22, 79],[23, 266],[24, 266],[25, 78],[26, 78],[27, 74]]) as Theme

export const light_purple_alt2_Button = n373 as Theme
const n374 = t([[12, 75],[13, 77],[14, 78],[15, 79],[16, 74],[17, 73],[18, 80],[19, 79],[20, 80],[21, 79],[22, 79],[23, 78],[24, 79],[25, 78],[26, 78],[27, 74]]) as Theme

export const light_purple_alt2_Checkbox = n374 as Theme
export const light_purple_alt2_Switch = n374 as Theme
export const light_purple_alt2_TooltipContent = n374 as Theme
export const light_purple_alt2_SliderTrack = n374 as Theme
const n375 = t([[12, 81],[13, 80],[14, 79],[15, 78],[16, 11],[17, 11],[18, 72],[19, 73],[20, 72],[21, 73],[22, 70],[23, 79],[24, 78],[25, 79],[26, 79],[27, 73]]) as Theme

export const light_purple_alt2_SwitchThumb = n375 as Theme
const n376 = t([[12, 77],[13, 75],[14, 74],[15, 73],[16, 78],[17, 79],[18, 72],[19, 73],[20, 72],[21, 73],[22, 73],[23, 74],[24, 73],[25, 74],[26, 74],[27, 78]]) as Theme

export const light_purple_alt2_SliderTrackActive = n376 as Theme
const n377 = t([[12, 79],[13, 78],[14, 77],[15, 75],[16, 80],[17, 81],[18, 72],[19, 73],[20, 72],[21, 73],[22, 71],[23, 77],[24, 75],[25, 77],[26, 77],[27, 75]]) as Theme

export const light_purple_alt2_SliderThumb = n377 as Theme
export const light_purple_alt2_Tooltip = n377 as Theme
export const light_purple_alt2_ProgressIndicator = n377 as Theme
const n378 = t([[12, 72],[13, 73],[14, 74],[15, 75],[16, 71],[17, 70],[18, 80],[19, 79],[20, 80],[21, 79],[22, 11],[23, 77],[24, 78],[25, 77],[26, 77],[27, 78]]) as Theme

export const light_purple_alt2_Input = n378 as Theme
export const light_purple_alt2_TextArea = n378 as Theme
const n379 = t([[12, 73],[13, 74],[14, 75],[15, 77],[16, 72],[17, 71],[19, 78],[20, 79],[21, 78],[22, 81],[23, 75],[24, 77],[25, 75],[26, 75],[27, 77]]) as Theme

export const light_purple_active_ListItem = n379 as Theme
const n380 = t([[12, 75],[13, 77],[14, 78],[15, 79],[16, 74],[17, 73],[19, 78],[20, 79],[21, 78],[22, 79],[23, 78],[24, 79],[25, 78],[26, 78],[27, 74]]) as Theme

export const light_purple_active_Card = n380 as Theme
export const light_purple_active_DrawerFrame = n380 as Theme
export const light_purple_active_Progress = n380 as Theme
export const light_purple_active_TooltipArrow = n380 as Theme
const n381 = t([[12, 77],[13, 78],[14, 79],[15, 80],[16, 75],[17, 74],[19, 78],[20, 79],[21, 78],[22, 78],[23, 266],[24, 266],[25, 79],[26, 79],[27, 73]]) as Theme

export const light_purple_active_Button = n381 as Theme
const n382 = t([[12, 77],[13, 78],[14, 79],[15, 80],[16, 75],[17, 74],[19, 78],[20, 79],[21, 78],[22, 78],[23, 79],[24, 80],[25, 79],[26, 79],[27, 73]]) as Theme

export const light_purple_active_Checkbox = n382 as Theme
export const light_purple_active_Switch = n382 as Theme
export const light_purple_active_TooltipContent = n382 as Theme
export const light_purple_active_SliderTrack = n382 as Theme
const n383 = t([[12, 80],[13, 79],[14, 78],[15, 77],[16, 81],[17, 11],[19, 74],[20, 73],[21, 74],[22, 70],[23, 78],[24, 77],[25, 78],[26, 78],[27, 74]]) as Theme

export const light_purple_active_SwitchThumb = n383 as Theme
const n384 = t([[12, 75],[13, 74],[14, 73],[15, 72],[16, 77],[17, 78],[19, 74],[20, 73],[21, 74],[22, 74],[23, 73],[24, 72],[25, 73],[26, 73],[27, 79]]) as Theme

export const light_purple_active_SliderTrackActive = n384 as Theme
const n385 = t([[12, 78],[13, 77],[14, 75],[15, 74],[16, 79],[17, 80],[19, 74],[20, 73],[21, 74],[22, 72],[23, 75],[24, 74],[25, 75],[26, 75],[27, 77]]) as Theme

export const light_purple_active_SliderThumb = n385 as Theme
export const light_purple_active_Tooltip = n385 as Theme
export const light_purple_active_ProgressIndicator = n385 as Theme
const n386 = t([[12, 73],[13, 74],[14, 75],[15, 77],[16, 72],[17, 71],[19, 78],[20, 79],[21, 78],[22, 81],[23, 78],[24, 79],[25, 78],[26, 78],[27, 77]]) as Theme

export const light_purple_active_Input = n386 as Theme
export const light_purple_active_TextArea = n386 as Theme
const n387 = t([[12, 59],[13, 60],[14, 61],[15, 62],[16, 58],[17, 58],[18, 69],[19, 68],[20, 69],[21, 68],[22, 11],[23, 61],[24, 62],[25, 61],[26, 61],[27, 67]]) as Theme

export const light_pink_alt1_ListItem = n387 as Theme
const n388 = t([[12, 61],[13, 62],[14, 63],[15, 65],[16, 60],[17, 59],[18, 69],[19, 68],[20, 69],[21, 68],[22, 69],[23, 63],[24, 65],[25, 63],[26, 63],[27, 65]]) as Theme

export const light_pink_alt1_Card = n388 as Theme
export const light_pink_alt1_DrawerFrame = n388 as Theme
export const light_pink_alt1_Progress = n388 as Theme
export const light_pink_alt1_TooltipArrow = n388 as Theme
const n389 = t([[12, 62],[13, 63],[14, 65],[15, 66],[16, 61],[17, 60],[18, 69],[19, 68],[20, 69],[21, 68],[22, 68],[23, 266],[24, 266],[25, 65],[26, 65],[27, 63]]) as Theme

export const light_pink_alt1_Button = n389 as Theme
const n390 = t([[12, 62],[13, 63],[14, 65],[15, 66],[16, 61],[17, 60],[18, 69],[19, 68],[20, 69],[21, 68],[22, 68],[23, 65],[24, 66],[25, 65],[26, 65],[27, 63]]) as Theme

export const light_pink_alt1_Checkbox = n390 as Theme
export const light_pink_alt1_Switch = n390 as Theme
export const light_pink_alt1_TooltipContent = n390 as Theme
export const light_pink_alt1_SliderTrack = n390 as Theme
const n391 = t([[12, 11],[13, 69],[14, 68],[15, 67],[16, 11],[17, 11],[18, 59],[19, 60],[20, 59],[21, 60],[22, 58],[23, 68],[24, 67],[25, 68],[26, 68],[27, 60]]) as Theme

export const light_pink_alt1_SwitchThumb = n391 as Theme
const n392 = t([[12, 66],[13, 65],[14, 63],[15, 62],[16, 67],[17, 68],[18, 59],[19, 60],[20, 59],[21, 60],[22, 60],[23, 63],[24, 62],[25, 63],[26, 63],[27, 65]]) as Theme

export const light_pink_alt1_SliderTrackActive = n392 as Theme
const n393 = t([[12, 68],[13, 67],[14, 66],[15, 65],[16, 69],[17, 11],[18, 59],[19, 60],[20, 59],[21, 60],[22, 58],[23, 66],[24, 65],[25, 66],[26, 66],[27, 62]]) as Theme

export const light_pink_alt1_SliderThumb = n393 as Theme
export const light_pink_alt1_Tooltip = n393 as Theme
export const light_pink_alt1_ProgressIndicator = n393 as Theme
const n394 = t([[12, 59],[13, 60],[14, 61],[15, 62],[16, 58],[17, 58],[18, 69],[19, 68],[20, 69],[21, 68],[22, 11],[23, 63],[24, 65],[25, 63],[26, 63],[27, 67]]) as Theme

export const light_pink_alt1_Input = n394 as Theme
export const light_pink_alt1_TextArea = n394 as Theme
const n395 = t([[12, 60],[13, 61],[14, 62],[15, 63],[16, 59],[17, 58],[18, 68],[19, 67],[20, 68],[21, 67],[22, 11],[23, 62],[24, 63],[25, 62],[26, 62],[27, 66]]) as Theme

export const light_pink_alt2_ListItem = n395 as Theme
const n396 = t([[12, 62],[13, 63],[14, 65],[15, 66],[16, 61],[17, 60],[18, 68],[19, 67],[20, 68],[21, 67],[22, 68],[23, 65],[24, 66],[25, 65],[26, 65],[27, 63]]) as Theme

export const light_pink_alt2_Card = n396 as Theme
export const light_pink_alt2_DrawerFrame = n396 as Theme
export const light_pink_alt2_Progress = n396 as Theme
export const light_pink_alt2_TooltipArrow = n396 as Theme
const n397 = t([[12, 63],[13, 65],[14, 66],[15, 67],[16, 62],[17, 61],[18, 68],[19, 67],[20, 68],[21, 67],[22, 67],[23, 266],[24, 266],[25, 66],[26, 66],[27, 62]]) as Theme

export const light_pink_alt2_Button = n397 as Theme
const n398 = t([[12, 63],[13, 65],[14, 66],[15, 67],[16, 62],[17, 61],[18, 68],[19, 67],[20, 68],[21, 67],[22, 67],[23, 66],[24, 67],[25, 66],[26, 66],[27, 62]]) as Theme

export const light_pink_alt2_Checkbox = n398 as Theme
export const light_pink_alt2_Switch = n398 as Theme
export const light_pink_alt2_TooltipContent = n398 as Theme
export const light_pink_alt2_SliderTrack = n398 as Theme
const n399 = t([[12, 69],[13, 68],[14, 67],[15, 66],[16, 11],[17, 11],[18, 60],[19, 61],[20, 60],[21, 61],[22, 58],[23, 67],[24, 66],[25, 67],[26, 67],[27, 61]]) as Theme

export const light_pink_alt2_SwitchThumb = n399 as Theme
const n400 = t([[12, 65],[13, 63],[14, 62],[15, 61],[16, 66],[17, 67],[18, 60],[19, 61],[20, 60],[21, 61],[22, 61],[23, 62],[24, 61],[25, 62],[26, 62],[27, 66]]) as Theme

export const light_pink_alt2_SliderTrackActive = n400 as Theme
const n401 = t([[12, 67],[13, 66],[14, 65],[15, 63],[16, 68],[17, 69],[18, 60],[19, 61],[20, 60],[21, 61],[22, 59],[23, 65],[24, 63],[25, 65],[26, 65],[27, 63]]) as Theme

export const light_pink_alt2_SliderThumb = n401 as Theme
export const light_pink_alt2_Tooltip = n401 as Theme
export const light_pink_alt2_ProgressIndicator = n401 as Theme
const n402 = t([[12, 60],[13, 61],[14, 62],[15, 63],[16, 59],[17, 58],[18, 68],[19, 67],[20, 68],[21, 67],[22, 11],[23, 65],[24, 66],[25, 65],[26, 65],[27, 66]]) as Theme

export const light_pink_alt2_Input = n402 as Theme
export const light_pink_alt2_TextArea = n402 as Theme
const n403 = t([[12, 61],[13, 62],[14, 63],[15, 65],[16, 60],[17, 59],[19, 66],[20, 67],[21, 66],[22, 69],[23, 63],[24, 65],[25, 63],[26, 63],[27, 65]]) as Theme

export const light_pink_active_ListItem = n403 as Theme
const n404 = t([[12, 63],[13, 65],[14, 66],[15, 67],[16, 62],[17, 61],[19, 66],[20, 67],[21, 66],[22, 67],[23, 66],[24, 67],[25, 66],[26, 66],[27, 62]]) as Theme

export const light_pink_active_Card = n404 as Theme
export const light_pink_active_DrawerFrame = n404 as Theme
export const light_pink_active_Progress = n404 as Theme
export const light_pink_active_TooltipArrow = n404 as Theme
const n405 = t([[12, 65],[13, 66],[14, 67],[15, 68],[16, 63],[17, 62],[19, 66],[20, 67],[21, 66],[22, 66],[23, 266],[24, 266],[25, 67],[26, 67],[27, 61]]) as Theme

export const light_pink_active_Button = n405 as Theme
const n406 = t([[12, 65],[13, 66],[14, 67],[15, 68],[16, 63],[17, 62],[19, 66],[20, 67],[21, 66],[22, 66],[23, 67],[24, 68],[25, 67],[26, 67],[27, 61]]) as Theme

export const light_pink_active_Checkbox = n406 as Theme
export const light_pink_active_Switch = n406 as Theme
export const light_pink_active_TooltipContent = n406 as Theme
export const light_pink_active_SliderTrack = n406 as Theme
const n407 = t([[12, 68],[13, 67],[14, 66],[15, 65],[16, 69],[17, 11],[19, 62],[20, 61],[21, 62],[22, 58],[23, 66],[24, 65],[25, 66],[26, 66],[27, 62]]) as Theme

export const light_pink_active_SwitchThumb = n407 as Theme
const n408 = t([[12, 63],[13, 62],[14, 61],[15, 60],[16, 65],[17, 66],[19, 62],[20, 61],[21, 62],[22, 62],[23, 61],[24, 60],[25, 61],[26, 61],[27, 67]]) as Theme

export const light_pink_active_SliderTrackActive = n408 as Theme
const n409 = t([[12, 66],[13, 65],[14, 63],[15, 62],[16, 67],[17, 68],[19, 62],[20, 61],[21, 62],[22, 60],[23, 63],[24, 62],[25, 63],[26, 63],[27, 65]]) as Theme

export const light_pink_active_SliderThumb = n409 as Theme
export const light_pink_active_Tooltip = n409 as Theme
export const light_pink_active_ProgressIndicator = n409 as Theme
const n410 = t([[12, 61],[13, 62],[14, 63],[15, 65],[16, 60],[17, 59],[19, 66],[20, 67],[21, 66],[22, 69],[23, 66],[24, 67],[25, 66],[26, 66],[27, 65]]) as Theme

export const light_pink_active_Input = n410 as Theme
export const light_pink_active_TextArea = n410 as Theme
const n411 = t([[12, 83],[13, 84],[14, 85],[15, 86],[16, 82],[17, 82],[18, 93],[19, 92],[20, 93],[21, 92],[22, 11],[23, 85],[24, 86],[25, 85],[26, 85],[27, 91]]) as Theme

export const light_red_alt1_ListItem = n411 as Theme
const n412 = t([[12, 85],[13, 86],[14, 87],[15, 89],[16, 84],[17, 83],[18, 93],[19, 92],[20, 93],[21, 92],[22, 93],[23, 87],[24, 89],[25, 87],[26, 87],[27, 89]]) as Theme

export const light_red_alt1_Card = n412 as Theme
export const light_red_alt1_DrawerFrame = n412 as Theme
export const light_red_alt1_Progress = n412 as Theme
export const light_red_alt1_TooltipArrow = n412 as Theme
const n413 = t([[12, 86],[13, 87],[14, 89],[15, 90],[16, 85],[17, 84],[18, 93],[19, 92],[20, 93],[21, 92],[22, 92],[23, 266],[24, 266],[25, 89],[26, 89],[27, 87]]) as Theme

export const light_red_alt1_Button = n413 as Theme
const n414 = t([[12, 86],[13, 87],[14, 89],[15, 90],[16, 85],[17, 84],[18, 93],[19, 92],[20, 93],[21, 92],[22, 92],[23, 89],[24, 90],[25, 89],[26, 89],[27, 87]]) as Theme

export const light_red_alt1_Checkbox = n414 as Theme
export const light_red_alt1_Switch = n414 as Theme
export const light_red_alt1_TooltipContent = n414 as Theme
export const light_red_alt1_SliderTrack = n414 as Theme
const n415 = t([[12, 11],[13, 93],[14, 92],[15, 91],[16, 11],[17, 11],[18, 83],[19, 84],[20, 83],[21, 84],[22, 82],[23, 92],[24, 91],[25, 92],[26, 92],[27, 84]]) as Theme

export const light_red_alt1_SwitchThumb = n415 as Theme
const n416 = t([[12, 90],[13, 89],[14, 87],[15, 86],[16, 91],[17, 92],[18, 83],[19, 84],[20, 83],[21, 84],[22, 84],[23, 87],[24, 86],[25, 87],[26, 87],[27, 89]]) as Theme

export const light_red_alt1_SliderTrackActive = n416 as Theme
const n417 = t([[12, 92],[13, 91],[14, 90],[15, 89],[16, 93],[17, 11],[18, 83],[19, 84],[20, 83],[21, 84],[22, 82],[23, 90],[24, 89],[25, 90],[26, 90],[27, 86]]) as Theme

export const light_red_alt1_SliderThumb = n417 as Theme
export const light_red_alt1_Tooltip = n417 as Theme
export const light_red_alt1_ProgressIndicator = n417 as Theme
const n418 = t([[12, 83],[13, 84],[14, 85],[15, 86],[16, 82],[17, 82],[18, 93],[19, 92],[20, 93],[21, 92],[22, 11],[23, 87],[24, 89],[25, 87],[26, 87],[27, 91]]) as Theme

export const light_red_alt1_Input = n418 as Theme
export const light_red_alt1_TextArea = n418 as Theme
const n419 = t([[12, 84],[13, 85],[14, 86],[15, 87],[16, 83],[17, 82],[18, 92],[19, 91],[20, 92],[21, 91],[22, 11],[23, 86],[24, 87],[25, 86],[26, 86],[27, 90]]) as Theme

export const light_red_alt2_ListItem = n419 as Theme
const n420 = t([[12, 86],[13, 87],[14, 89],[15, 90],[16, 85],[17, 84],[18, 92],[19, 91],[20, 92],[21, 91],[22, 92],[23, 89],[24, 90],[25, 89],[26, 89],[27, 87]]) as Theme

export const light_red_alt2_Card = n420 as Theme
export const light_red_alt2_DrawerFrame = n420 as Theme
export const light_red_alt2_Progress = n420 as Theme
export const light_red_alt2_TooltipArrow = n420 as Theme
const n421 = t([[12, 87],[13, 89],[14, 90],[15, 91],[16, 86],[17, 85],[18, 92],[19, 91],[20, 92],[21, 91],[22, 91],[23, 266],[24, 266],[25, 90],[26, 90],[27, 86]]) as Theme

export const light_red_alt2_Button = n421 as Theme
const n422 = t([[12, 87],[13, 89],[14, 90],[15, 91],[16, 86],[17, 85],[18, 92],[19, 91],[20, 92],[21, 91],[22, 91],[23, 90],[24, 91],[25, 90],[26, 90],[27, 86]]) as Theme

export const light_red_alt2_Checkbox = n422 as Theme
export const light_red_alt2_Switch = n422 as Theme
export const light_red_alt2_TooltipContent = n422 as Theme
export const light_red_alt2_SliderTrack = n422 as Theme
const n423 = t([[12, 93],[13, 92],[14, 91],[15, 90],[16, 11],[17, 11],[18, 84],[19, 85],[20, 84],[21, 85],[22, 82],[23, 91],[24, 90],[25, 91],[26, 91],[27, 85]]) as Theme

export const light_red_alt2_SwitchThumb = n423 as Theme
const n424 = t([[12, 89],[13, 87],[14, 86],[15, 85],[16, 90],[17, 91],[18, 84],[19, 85],[20, 84],[21, 85],[22, 85],[23, 86],[24, 85],[25, 86],[26, 86],[27, 90]]) as Theme

export const light_red_alt2_SliderTrackActive = n424 as Theme
const n425 = t([[12, 91],[13, 90],[14, 89],[15, 87],[16, 92],[17, 93],[18, 84],[19, 85],[20, 84],[21, 85],[22, 83],[23, 89],[24, 87],[25, 89],[26, 89],[27, 87]]) as Theme

export const light_red_alt2_SliderThumb = n425 as Theme
export const light_red_alt2_Tooltip = n425 as Theme
export const light_red_alt2_ProgressIndicator = n425 as Theme
const n426 = t([[12, 84],[13, 85],[14, 86],[15, 87],[16, 83],[17, 82],[18, 92],[19, 91],[20, 92],[21, 91],[22, 11],[23, 89],[24, 90],[25, 89],[26, 89],[27, 90]]) as Theme

export const light_red_alt2_Input = n426 as Theme
export const light_red_alt2_TextArea = n426 as Theme
const n427 = t([[12, 85],[13, 86],[14, 87],[15, 89],[16, 84],[17, 83],[19, 90],[20, 91],[21, 90],[22, 93],[23, 87],[24, 89],[25, 87],[26, 87],[27, 89]]) as Theme

export const light_red_active_ListItem = n427 as Theme
const n428 = t([[12, 87],[13, 89],[14, 90],[15, 91],[16, 86],[17, 85],[19, 90],[20, 91],[21, 90],[22, 91],[23, 90],[24, 91],[25, 90],[26, 90],[27, 86]]) as Theme

export const light_red_active_Card = n428 as Theme
export const light_red_active_DrawerFrame = n428 as Theme
export const light_red_active_Progress = n428 as Theme
export const light_red_active_TooltipArrow = n428 as Theme
const n429 = t([[12, 89],[13, 90],[14, 91],[15, 92],[16, 87],[17, 86],[19, 90],[20, 91],[21, 90],[22, 90],[23, 266],[24, 266],[25, 91],[26, 91],[27, 85]]) as Theme

export const light_red_active_Button = n429 as Theme
const n430 = t([[12, 89],[13, 90],[14, 91],[15, 92],[16, 87],[17, 86],[19, 90],[20, 91],[21, 90],[22, 90],[23, 91],[24, 92],[25, 91],[26, 91],[27, 85]]) as Theme

export const light_red_active_Checkbox = n430 as Theme
export const light_red_active_Switch = n430 as Theme
export const light_red_active_TooltipContent = n430 as Theme
export const light_red_active_SliderTrack = n430 as Theme
const n431 = t([[12, 92],[13, 91],[14, 90],[15, 89],[16, 93],[17, 11],[19, 86],[20, 85],[21, 86],[22, 82],[23, 90],[24, 89],[25, 90],[26, 90],[27, 86]]) as Theme

export const light_red_active_SwitchThumb = n431 as Theme
const n432 = t([[12, 87],[13, 86],[14, 85],[15, 84],[16, 89],[17, 90],[19, 86],[20, 85],[21, 86],[22, 86],[23, 85],[24, 84],[25, 85],[26, 85],[27, 91]]) as Theme

export const light_red_active_SliderTrackActive = n432 as Theme
const n433 = t([[12, 90],[13, 89],[14, 87],[15, 86],[16, 91],[17, 92],[19, 86],[20, 85],[21, 86],[22, 84],[23, 87],[24, 86],[25, 87],[26, 87],[27, 89]]) as Theme

export const light_red_active_SliderThumb = n433 as Theme
export const light_red_active_Tooltip = n433 as Theme
export const light_red_active_ProgressIndicator = n433 as Theme
const n434 = t([[12, 85],[13, 86],[14, 87],[15, 89],[16, 84],[17, 83],[19, 90],[20, 91],[21, 90],[22, 93],[23, 90],[24, 91],[25, 90],[26, 90],[27, 89]]) as Theme

export const light_red_active_Input = n434 as Theme
export const light_red_active_TextArea = n434 as Theme
const n435 = t([[12, 107],[13, 108],[14, 109],[15, 110],[16, 106],[17, 106],[18, 117],[19, 116],[20, 117],[21, 116],[22, 11],[23, 109],[24, 110],[25, 109],[26, 109],[27, 115]]) as Theme

export const light_gold_alt1_ListItem = n435 as Theme
const n436 = t([[12, 109],[13, 110],[14, 111],[15, 113],[16, 108],[17, 107],[18, 117],[19, 116],[20, 117],[21, 116],[22, 117],[23, 111],[24, 113],[25, 111],[26, 111],[27, 113]]) as Theme

export const light_gold_alt1_Card = n436 as Theme
export const light_gold_alt1_DrawerFrame = n436 as Theme
export const light_gold_alt1_Progress = n436 as Theme
export const light_gold_alt1_TooltipArrow = n436 as Theme
const n437 = t([[12, 110],[13, 111],[14, 113],[15, 114],[16, 109],[17, 108],[18, 117],[19, 116],[20, 117],[21, 116],[22, 116],[23, 266],[24, 266],[25, 113],[26, 113],[27, 111]]) as Theme

export const light_gold_alt1_Button = n437 as Theme
const n438 = t([[12, 110],[13, 111],[14, 113],[15, 114],[16, 109],[17, 108],[18, 117],[19, 116],[20, 117],[21, 116],[22, 116],[23, 113],[24, 114],[25, 113],[26, 113],[27, 111]]) as Theme

export const light_gold_alt1_Checkbox = n438 as Theme
export const light_gold_alt1_Switch = n438 as Theme
export const light_gold_alt1_TooltipContent = n438 as Theme
export const light_gold_alt1_SliderTrack = n438 as Theme
const n439 = t([[12, 11],[13, 117],[14, 116],[15, 115],[16, 11],[17, 11],[18, 107],[19, 108],[20, 107],[21, 108],[22, 106],[23, 116],[24, 115],[25, 116],[26, 116],[27, 108]]) as Theme

export const light_gold_alt1_SwitchThumb = n439 as Theme
const n440 = t([[12, 114],[13, 113],[14, 111],[15, 110],[16, 115],[17, 116],[18, 107],[19, 108],[20, 107],[21, 108],[22, 108],[23, 111],[24, 110],[25, 111],[26, 111],[27, 113]]) as Theme

export const light_gold_alt1_SliderTrackActive = n440 as Theme
const n441 = t([[12, 116],[13, 115],[14, 114],[15, 113],[16, 117],[17, 11],[18, 107],[19, 108],[20, 107],[21, 108],[22, 106],[23, 114],[24, 113],[25, 114],[26, 114],[27, 110]]) as Theme

export const light_gold_alt1_SliderThumb = n441 as Theme
export const light_gold_alt1_Tooltip = n441 as Theme
export const light_gold_alt1_ProgressIndicator = n441 as Theme
const n442 = t([[12, 107],[13, 108],[14, 109],[15, 110],[16, 106],[17, 106],[18, 117],[19, 116],[20, 117],[21, 116],[22, 11],[23, 111],[24, 113],[25, 111],[26, 111],[27, 115]]) as Theme

export const light_gold_alt1_Input = n442 as Theme
export const light_gold_alt1_TextArea = n442 as Theme
const n443 = t([[12, 108],[13, 109],[14, 110],[15, 111],[16, 107],[17, 106],[18, 116],[19, 115],[20, 116],[21, 115],[22, 11],[23, 110],[24, 111],[25, 110],[26, 110],[27, 114]]) as Theme

export const light_gold_alt2_ListItem = n443 as Theme
const n444 = t([[12, 110],[13, 111],[14, 113],[15, 114],[16, 109],[17, 108],[18, 116],[19, 115],[20, 116],[21, 115],[22, 116],[23, 113],[24, 114],[25, 113],[26, 113],[27, 111]]) as Theme

export const light_gold_alt2_Card = n444 as Theme
export const light_gold_alt2_DrawerFrame = n444 as Theme
export const light_gold_alt2_Progress = n444 as Theme
export const light_gold_alt2_TooltipArrow = n444 as Theme
const n445 = t([[12, 111],[13, 113],[14, 114],[15, 115],[16, 110],[17, 109],[18, 116],[19, 115],[20, 116],[21, 115],[22, 115],[23, 266],[24, 266],[25, 114],[26, 114],[27, 110]]) as Theme

export const light_gold_alt2_Button = n445 as Theme
const n446 = t([[12, 111],[13, 113],[14, 114],[15, 115],[16, 110],[17, 109],[18, 116],[19, 115],[20, 116],[21, 115],[22, 115],[23, 114],[24, 115],[25, 114],[26, 114],[27, 110]]) as Theme

export const light_gold_alt2_Checkbox = n446 as Theme
export const light_gold_alt2_Switch = n446 as Theme
export const light_gold_alt2_TooltipContent = n446 as Theme
export const light_gold_alt2_SliderTrack = n446 as Theme
const n447 = t([[12, 117],[13, 116],[14, 115],[15, 114],[16, 11],[17, 11],[18, 108],[19, 109],[20, 108],[21, 109],[22, 106],[23, 115],[24, 114],[25, 115],[26, 115],[27, 109]]) as Theme

export const light_gold_alt2_SwitchThumb = n447 as Theme
const n448 = t([[12, 113],[13, 111],[14, 110],[15, 109],[16, 114],[17, 115],[18, 108],[19, 109],[20, 108],[21, 109],[22, 109],[23, 110],[24, 109],[25, 110],[26, 110],[27, 114]]) as Theme

export const light_gold_alt2_SliderTrackActive = n448 as Theme
const n449 = t([[12, 115],[13, 114],[14, 113],[15, 111],[16, 116],[17, 117],[18, 108],[19, 109],[20, 108],[21, 109],[22, 107],[23, 113],[24, 111],[25, 113],[26, 113],[27, 111]]) as Theme

export const light_gold_alt2_SliderThumb = n449 as Theme
export const light_gold_alt2_Tooltip = n449 as Theme
export const light_gold_alt2_ProgressIndicator = n449 as Theme
const n450 = t([[12, 108],[13, 109],[14, 110],[15, 111],[16, 107],[17, 106],[18, 116],[19, 115],[20, 116],[21, 115],[22, 11],[23, 113],[24, 114],[25, 113],[26, 113],[27, 114]]) as Theme

export const light_gold_alt2_Input = n450 as Theme
export const light_gold_alt2_TextArea = n450 as Theme
const n451 = t([[12, 109],[13, 110],[14, 111],[15, 113],[16, 108],[17, 107],[19, 114],[20, 115],[21, 114],[22, 117],[23, 111],[24, 113],[25, 111],[26, 111],[27, 113]]) as Theme

export const light_gold_active_ListItem = n451 as Theme
const n452 = t([[12, 111],[13, 113],[14, 114],[15, 115],[16, 110],[17, 109],[19, 114],[20, 115],[21, 114],[22, 115],[23, 114],[24, 115],[25, 114],[26, 114],[27, 110]]) as Theme

export const light_gold_active_Card = n452 as Theme
export const light_gold_active_DrawerFrame = n452 as Theme
export const light_gold_active_Progress = n452 as Theme
export const light_gold_active_TooltipArrow = n452 as Theme
const n453 = t([[12, 113],[13, 114],[14, 115],[15, 116],[16, 111],[17, 110],[19, 114],[20, 115],[21, 114],[22, 114],[23, 266],[24, 266],[25, 115],[26, 115],[27, 109]]) as Theme

export const light_gold_active_Button = n453 as Theme
const n454 = t([[12, 113],[13, 114],[14, 115],[15, 116],[16, 111],[17, 110],[19, 114],[20, 115],[21, 114],[22, 114],[23, 115],[24, 116],[25, 115],[26, 115],[27, 109]]) as Theme

export const light_gold_active_Checkbox = n454 as Theme
export const light_gold_active_Switch = n454 as Theme
export const light_gold_active_TooltipContent = n454 as Theme
export const light_gold_active_SliderTrack = n454 as Theme
const n455 = t([[12, 116],[13, 115],[14, 114],[15, 113],[16, 117],[17, 11],[19, 110],[20, 109],[21, 110],[22, 106],[23, 114],[24, 113],[25, 114],[26, 114],[27, 110]]) as Theme

export const light_gold_active_SwitchThumb = n455 as Theme
const n456 = t([[12, 111],[13, 110],[14, 109],[15, 108],[16, 113],[17, 114],[19, 110],[20, 109],[21, 110],[22, 110],[23, 109],[24, 108],[25, 109],[26, 109],[27, 115]]) as Theme

export const light_gold_active_SliderTrackActive = n456 as Theme
const n457 = t([[12, 114],[13, 113],[14, 111],[15, 110],[16, 115],[17, 116],[19, 110],[20, 109],[21, 110],[22, 108],[23, 111],[24, 110],[25, 111],[26, 111],[27, 113]]) as Theme

export const light_gold_active_SliderThumb = n457 as Theme
export const light_gold_active_Tooltip = n457 as Theme
export const light_gold_active_ProgressIndicator = n457 as Theme
const n458 = t([[12, 109],[13, 110],[14, 111],[15, 113],[16, 108],[17, 107],[19, 114],[20, 115],[21, 114],[22, 117],[23, 114],[24, 115],[25, 114],[26, 114],[27, 113]]) as Theme

export const light_gold_active_Input = n458 as Theme
export const light_gold_active_TextArea = n458 as Theme
const n459 = t([[12, 166],[13, 167],[14, 168],[15, 169],[16, 165],[17, 164],[18, 174],[19, 173],[20, 174],[21, 173],[22, 0],[23, 169],[24, 171],[25, 168],[26, 169],[27, 54]]) as Theme

export const dark_orange_alt1_ListItem = n459 as Theme
const n460 = t([[12, 167],[13, 168],[14, 169],[15, 171],[16, 166],[17, 165],[18, 174],[19, 173],[20, 174],[21, 173],[22, 174],[23, 171],[24, 54],[25, 169],[26, 171],[27, 171]]) as Theme

export const dark_orange_alt1_Card = n460 as Theme
export const dark_orange_alt1_DrawerFrame = n460 as Theme
export const dark_orange_alt1_Progress = n460 as Theme
export const dark_orange_alt1_TooltipArrow = n460 as Theme
const n461 = t([[12, 168],[13, 169],[14, 171],[15, 54],[16, 167],[17, 166],[18, 174],[19, 173],[20, 174],[21, 173],[22, 173],[23, 266],[24, 266],[25, 171],[26, 54],[27, 169]]) as Theme

export const dark_orange_alt1_Button = n461 as Theme
const n462 = t([[12, 168],[13, 169],[14, 171],[15, 54],[16, 167],[17, 166],[18, 174],[19, 173],[20, 174],[21, 173],[22, 173],[23, 54],[24, 172],[25, 171],[26, 54],[27, 169]]) as Theme

export const dark_orange_alt1_Checkbox = n462 as Theme
export const dark_orange_alt1_Switch = n462 as Theme
export const dark_orange_alt1_TooltipContent = n462 as Theme
export const dark_orange_alt1_SliderTrack = n462 as Theme
const n463 = t([[12, 0],[13, 174],[14, 173],[15, 172],[16, 0],[17, 0],[18, 165],[19, 166],[20, 165],[21, 166],[22, 164],[23, 172],[24, 54],[25, 173],[26, 172],[27, 166]]) as Theme

export const dark_orange_alt1_SwitchThumb = n463 as Theme
const n464 = t([[12, 54],[13, 171],[14, 169],[15, 168],[16, 172],[17, 173],[18, 165],[19, 166],[20, 165],[21, 166],[22, 166],[23, 168],[24, 167],[25, 169],[26, 168],[27, 171]]) as Theme

export const dark_orange_alt1_SliderTrackActive = n464 as Theme
const n465 = t([[12, 173],[13, 172],[14, 54],[15, 171],[16, 174],[17, 0],[18, 165],[19, 166],[20, 165],[21, 166],[22, 164],[23, 171],[24, 169],[25, 54],[26, 171],[27, 168]]) as Theme

export const dark_orange_alt1_SliderThumb = n465 as Theme
export const dark_orange_alt1_Tooltip = n465 as Theme
export const dark_orange_alt1_ProgressIndicator = n465 as Theme
const n466 = t([[12, 166],[13, 167],[14, 168],[15, 169],[16, 165],[17, 164],[18, 174],[19, 173],[20, 174],[21, 173],[22, 0],[23, 171],[24, 54],[25, 169],[26, 171],[27, 54]]) as Theme

export const dark_orange_alt1_Input = n466 as Theme
export const dark_orange_alt1_TextArea = n466 as Theme
const n467 = t([[12, 167],[13, 168],[14, 169],[15, 171],[16, 166],[17, 165],[18, 173],[19, 172],[20, 173],[21, 172],[22, 174],[23, 171],[24, 54],[25, 169],[26, 171],[27, 171]]) as Theme

export const dark_orange_alt2_ListItem = n467 as Theme
const n468 = t([[12, 168],[13, 169],[14, 171],[15, 54],[16, 167],[17, 166],[18, 173],[19, 172],[20, 173],[21, 172],[22, 173],[23, 54],[24, 172],[25, 171],[26, 54],[27, 169]]) as Theme

export const dark_orange_alt2_Card = n468 as Theme
export const dark_orange_alt2_DrawerFrame = n468 as Theme
export const dark_orange_alt2_Progress = n468 as Theme
export const dark_orange_alt2_TooltipArrow = n468 as Theme
const n469 = t([[12, 169],[13, 171],[14, 54],[15, 172],[16, 168],[17, 167],[18, 173],[19, 172],[20, 173],[21, 172],[22, 172],[23, 266],[24, 266],[25, 54],[26, 172],[27, 168]]) as Theme

export const dark_orange_alt2_Button = n469 as Theme
const n470 = t([[12, 169],[13, 171],[14, 54],[15, 172],[16, 168],[17, 167],[18, 173],[19, 172],[20, 173],[21, 172],[22, 172],[23, 172],[24, 173],[25, 54],[26, 172],[27, 168]]) as Theme

export const dark_orange_alt2_Checkbox = n470 as Theme
export const dark_orange_alt2_Switch = n470 as Theme
export const dark_orange_alt2_TooltipContent = n470 as Theme
export const dark_orange_alt2_SliderTrack = n470 as Theme
const n471 = t([[12, 174],[13, 173],[14, 172],[15, 54],[16, 0],[17, 0],[18, 166],[19, 167],[20, 166],[21, 167],[22, 164],[23, 54],[24, 171],[25, 172],[26, 54],[27, 167]]) as Theme

export const dark_orange_alt2_SwitchThumb = n471 as Theme
const n472 = t([[12, 171],[13, 169],[14, 168],[15, 167],[16, 54],[17, 172],[18, 166],[19, 167],[20, 166],[21, 167],[22, 167],[23, 167],[24, 166],[25, 168],[26, 167],[27, 54]]) as Theme

export const dark_orange_alt2_SliderTrackActive = n472 as Theme
const n473 = t([[12, 172],[13, 54],[14, 171],[15, 169],[16, 173],[17, 174],[18, 166],[19, 167],[20, 166],[21, 167],[22, 165],[23, 169],[24, 168],[25, 171],[26, 169],[27, 169]]) as Theme

export const dark_orange_alt2_SliderThumb = n473 as Theme
export const dark_orange_alt2_Tooltip = n473 as Theme
export const dark_orange_alt2_ProgressIndicator = n473 as Theme
const n474 = t([[12, 167],[13, 168],[14, 169],[15, 171],[16, 166],[17, 165],[18, 173],[19, 172],[20, 173],[21, 172],[22, 174],[23, 54],[24, 172],[25, 171],[26, 54],[27, 171]]) as Theme

export const dark_orange_alt2_Input = n474 as Theme
export const dark_orange_alt2_TextArea = n474 as Theme
const n475 = t([[12, 168],[13, 169],[14, 171],[15, 54],[16, 167],[17, 166],[19, 54],[20, 172],[21, 54],[22, 173],[23, 54],[24, 172],[25, 171],[26, 54],[27, 169]]) as Theme

export const dark_orange_active_ListItem = n475 as Theme
const n476 = t([[12, 169],[13, 171],[14, 54],[15, 172],[16, 168],[17, 167],[19, 54],[20, 172],[21, 54],[22, 172],[23, 172],[24, 173],[25, 54],[26, 172],[27, 168]]) as Theme

export const dark_orange_active_Card = n476 as Theme
export const dark_orange_active_DrawerFrame = n476 as Theme
export const dark_orange_active_Progress = n476 as Theme
export const dark_orange_active_TooltipArrow = n476 as Theme
const n477 = t([[12, 171],[13, 54],[14, 172],[15, 173],[16, 169],[17, 168],[19, 54],[20, 172],[21, 54],[22, 54],[23, 266],[24, 266],[25, 172],[26, 173],[27, 167]]) as Theme

export const dark_orange_active_Button = n477 as Theme
const n478 = t([[12, 171],[13, 54],[14, 172],[15, 173],[16, 169],[17, 168],[19, 54],[20, 172],[21, 54],[22, 54],[23, 173],[24, 174],[25, 172],[26, 173],[27, 167]]) as Theme

export const dark_orange_active_Checkbox = n478 as Theme
export const dark_orange_active_Switch = n478 as Theme
export const dark_orange_active_TooltipContent = n478 as Theme
export const dark_orange_active_SliderTrack = n478 as Theme
const n479 = t([[12, 173],[13, 172],[14, 54],[15, 171],[16, 174],[17, 0],[19, 168],[20, 167],[21, 168],[22, 164],[23, 171],[24, 169],[25, 54],[26, 171],[27, 168]]) as Theme

export const dark_orange_active_SwitchThumb = n479 as Theme
const n480 = t([[12, 169],[13, 168],[14, 167],[15, 166],[16, 171],[17, 54],[19, 168],[20, 167],[21, 168],[22, 168],[23, 166],[24, 165],[25, 167],[26, 166],[27, 172]]) as Theme

export const dark_orange_active_SliderTrackActive = n480 as Theme
const n481 = t([[12, 54],[13, 171],[14, 169],[15, 168],[16, 172],[17, 173],[19, 168],[20, 167],[21, 168],[22, 166],[23, 168],[24, 167],[25, 169],[26, 168],[27, 171]]) as Theme

export const dark_orange_active_SliderThumb = n481 as Theme
export const dark_orange_active_Tooltip = n481 as Theme
export const dark_orange_active_ProgressIndicator = n481 as Theme
const n482 = t([[12, 168],[13, 169],[14, 171],[15, 54],[16, 167],[17, 166],[19, 54],[20, 172],[21, 54],[22, 173],[23, 172],[24, 173],[25, 54],[26, 172],[27, 169]]) as Theme

export const dark_orange_active_Input = n482 as Theme
export const dark_orange_active_TextArea = n482 as Theme
const n483 = t([[12, 210],[13, 211],[14, 212],[15, 213],[16, 209],[17, 208],[18, 218],[19, 217],[20, 218],[21, 217],[22, 0],[23, 213],[24, 215],[25, 212],[26, 213],[27, 102]]) as Theme

export const dark_yellow_alt1_ListItem = n483 as Theme
const n484 = t([[12, 211],[13, 212],[14, 213],[15, 215],[16, 210],[17, 209],[18, 218],[19, 217],[20, 218],[21, 217],[22, 218],[23, 215],[24, 102],[25, 213],[26, 215],[27, 215]]) as Theme

export const dark_yellow_alt1_Card = n484 as Theme
export const dark_yellow_alt1_DrawerFrame = n484 as Theme
export const dark_yellow_alt1_Progress = n484 as Theme
export const dark_yellow_alt1_TooltipArrow = n484 as Theme
const n485 = t([[12, 212],[13, 213],[14, 215],[15, 102],[16, 211],[17, 210],[18, 218],[19, 217],[20, 218],[21, 217],[22, 217],[23, 266],[24, 266],[25, 215],[26, 102],[27, 213]]) as Theme

export const dark_yellow_alt1_Button = n485 as Theme
const n486 = t([[12, 212],[13, 213],[14, 215],[15, 102],[16, 211],[17, 210],[18, 218],[19, 217],[20, 218],[21, 217],[22, 217],[23, 102],[24, 216],[25, 215],[26, 102],[27, 213]]) as Theme

export const dark_yellow_alt1_Checkbox = n486 as Theme
export const dark_yellow_alt1_Switch = n486 as Theme
export const dark_yellow_alt1_TooltipContent = n486 as Theme
export const dark_yellow_alt1_SliderTrack = n486 as Theme
const n487 = t([[12, 0],[13, 218],[14, 217],[15, 216],[16, 0],[17, 0],[18, 209],[19, 210],[20, 209],[21, 210],[22, 208],[23, 216],[24, 102],[25, 217],[26, 216],[27, 210]]) as Theme

export const dark_yellow_alt1_SwitchThumb = n487 as Theme
const n488 = t([[12, 102],[13, 215],[14, 213],[15, 212],[16, 216],[17, 217],[18, 209],[19, 210],[20, 209],[21, 210],[22, 210],[23, 212],[24, 211],[25, 213],[26, 212],[27, 215]]) as Theme

export const dark_yellow_alt1_SliderTrackActive = n488 as Theme
const n489 = t([[12, 217],[13, 216],[14, 102],[15, 215],[16, 218],[17, 0],[18, 209],[19, 210],[20, 209],[21, 210],[22, 208],[23, 215],[24, 213],[25, 102],[26, 215],[27, 212]]) as Theme

export const dark_yellow_alt1_SliderThumb = n489 as Theme
export const dark_yellow_alt1_Tooltip = n489 as Theme
export const dark_yellow_alt1_ProgressIndicator = n489 as Theme
const n490 = t([[12, 210],[13, 211],[14, 212],[15, 213],[16, 209],[17, 208],[18, 218],[19, 217],[20, 218],[21, 217],[22, 0],[23, 215],[24, 102],[25, 213],[26, 215],[27, 102]]) as Theme

export const dark_yellow_alt1_Input = n490 as Theme
export const dark_yellow_alt1_TextArea = n490 as Theme
const n491 = t([[12, 211],[13, 212],[14, 213],[15, 215],[16, 210],[17, 209],[18, 217],[19, 216],[20, 217],[21, 216],[22, 218],[23, 215],[24, 102],[25, 213],[26, 215],[27, 215]]) as Theme

export const dark_yellow_alt2_ListItem = n491 as Theme
const n492 = t([[12, 212],[13, 213],[14, 215],[15, 102],[16, 211],[17, 210],[18, 217],[19, 216],[20, 217],[21, 216],[22, 217],[23, 102],[24, 216],[25, 215],[26, 102],[27, 213]]) as Theme

export const dark_yellow_alt2_Card = n492 as Theme
export const dark_yellow_alt2_DrawerFrame = n492 as Theme
export const dark_yellow_alt2_Progress = n492 as Theme
export const dark_yellow_alt2_TooltipArrow = n492 as Theme
const n493 = t([[12, 213],[13, 215],[14, 102],[15, 216],[16, 212],[17, 211],[18, 217],[19, 216],[20, 217],[21, 216],[22, 216],[23, 266],[24, 266],[25, 102],[26, 216],[27, 212]]) as Theme

export const dark_yellow_alt2_Button = n493 as Theme
const n494 = t([[12, 213],[13, 215],[14, 102],[15, 216],[16, 212],[17, 211],[18, 217],[19, 216],[20, 217],[21, 216],[22, 216],[23, 216],[24, 217],[25, 102],[26, 216],[27, 212]]) as Theme

export const dark_yellow_alt2_Checkbox = n494 as Theme
export const dark_yellow_alt2_Switch = n494 as Theme
export const dark_yellow_alt2_TooltipContent = n494 as Theme
export const dark_yellow_alt2_SliderTrack = n494 as Theme
const n495 = t([[12, 218],[13, 217],[14, 216],[15, 102],[16, 0],[17, 0],[18, 210],[19, 211],[20, 210],[21, 211],[22, 208],[23, 102],[24, 215],[25, 216],[26, 102],[27, 211]]) as Theme

export const dark_yellow_alt2_SwitchThumb = n495 as Theme
const n496 = t([[12, 215],[13, 213],[14, 212],[15, 211],[16, 102],[17, 216],[18, 210],[19, 211],[20, 210],[21, 211],[22, 211],[23, 211],[24, 210],[25, 212],[26, 211],[27, 102]]) as Theme

export const dark_yellow_alt2_SliderTrackActive = n496 as Theme
const n497 = t([[12, 216],[13, 102],[14, 215],[15, 213],[16, 217],[17, 218],[18, 210],[19, 211],[20, 210],[21, 211],[22, 209],[23, 213],[24, 212],[25, 215],[26, 213],[27, 213]]) as Theme

export const dark_yellow_alt2_SliderThumb = n497 as Theme
export const dark_yellow_alt2_Tooltip = n497 as Theme
export const dark_yellow_alt2_ProgressIndicator = n497 as Theme
const n498 = t([[12, 211],[13, 212],[14, 213],[15, 215],[16, 210],[17, 209],[18, 217],[19, 216],[20, 217],[21, 216],[22, 218],[23, 102],[24, 216],[25, 215],[26, 102],[27, 215]]) as Theme

export const dark_yellow_alt2_Input = n498 as Theme
export const dark_yellow_alt2_TextArea = n498 as Theme
const n499 = t([[12, 212],[13, 213],[14, 215],[15, 102],[16, 211],[17, 210],[19, 102],[20, 216],[21, 102],[22, 217],[23, 102],[24, 216],[25, 215],[26, 102],[27, 213]]) as Theme

export const dark_yellow_active_ListItem = n499 as Theme
const n500 = t([[12, 213],[13, 215],[14, 102],[15, 216],[16, 212],[17, 211],[19, 102],[20, 216],[21, 102],[22, 216],[23, 216],[24, 217],[25, 102],[26, 216],[27, 212]]) as Theme

export const dark_yellow_active_Card = n500 as Theme
export const dark_yellow_active_DrawerFrame = n500 as Theme
export const dark_yellow_active_Progress = n500 as Theme
export const dark_yellow_active_TooltipArrow = n500 as Theme
const n501 = t([[12, 215],[13, 102],[14, 216],[15, 217],[16, 213],[17, 212],[19, 102],[20, 216],[21, 102],[22, 102],[23, 266],[24, 266],[25, 216],[26, 217],[27, 211]]) as Theme

export const dark_yellow_active_Button = n501 as Theme
const n502 = t([[12, 215],[13, 102],[14, 216],[15, 217],[16, 213],[17, 212],[19, 102],[20, 216],[21, 102],[22, 102],[23, 217],[24, 218],[25, 216],[26, 217],[27, 211]]) as Theme

export const dark_yellow_active_Checkbox = n502 as Theme
export const dark_yellow_active_Switch = n502 as Theme
export const dark_yellow_active_TooltipContent = n502 as Theme
export const dark_yellow_active_SliderTrack = n502 as Theme
const n503 = t([[12, 217],[13, 216],[14, 102],[15, 215],[16, 218],[17, 0],[19, 212],[20, 211],[21, 212],[22, 208],[23, 215],[24, 213],[25, 102],[26, 215],[27, 212]]) as Theme

export const dark_yellow_active_SwitchThumb = n503 as Theme
const n504 = t([[12, 213],[13, 212],[14, 211],[15, 210],[16, 215],[17, 102],[19, 212],[20, 211],[21, 212],[22, 212],[23, 210],[24, 209],[25, 211],[26, 210],[27, 216]]) as Theme

export const dark_yellow_active_SliderTrackActive = n504 as Theme
const n505 = t([[12, 102],[13, 215],[14, 213],[15, 212],[16, 216],[17, 217],[19, 212],[20, 211],[21, 212],[22, 210],[23, 212],[24, 211],[25, 213],[26, 212],[27, 215]]) as Theme

export const dark_yellow_active_SliderThumb = n505 as Theme
export const dark_yellow_active_Tooltip = n505 as Theme
export const dark_yellow_active_ProgressIndicator = n505 as Theme
const n506 = t([[12, 212],[13, 213],[14, 215],[15, 102],[16, 211],[17, 210],[19, 102],[20, 216],[21, 102],[22, 217],[23, 216],[24, 217],[25, 102],[26, 216],[27, 213]]) as Theme

export const dark_yellow_active_Input = n506 as Theme
export const dark_yellow_active_TextArea = n506 as Theme
const n507 = t([[12, 155],[13, 156],[14, 157],[15, 158],[16, 154],[17, 153],[18, 163],[19, 162],[20, 163],[21, 162],[22, 0],[23, 158],[24, 160],[25, 157],[26, 158],[27, 42]]) as Theme

export const dark_green_alt1_ListItem = n507 as Theme
const n508 = t([[12, 156],[13, 157],[14, 158],[15, 160],[16, 155],[17, 154],[18, 163],[19, 162],[20, 163],[21, 162],[22, 163],[23, 160],[24, 42],[25, 158],[26, 160],[27, 160]]) as Theme

export const dark_green_alt1_Card = n508 as Theme
export const dark_green_alt1_DrawerFrame = n508 as Theme
export const dark_green_alt1_Progress = n508 as Theme
export const dark_green_alt1_TooltipArrow = n508 as Theme
const n509 = t([[12, 157],[13, 158],[14, 160],[15, 42],[16, 156],[17, 155],[18, 163],[19, 162],[20, 163],[21, 162],[22, 162],[23, 266],[24, 266],[25, 160],[26, 42],[27, 158]]) as Theme

export const dark_green_alt1_Button = n509 as Theme
const n510 = t([[12, 157],[13, 158],[14, 160],[15, 42],[16, 156],[17, 155],[18, 163],[19, 162],[20, 163],[21, 162],[22, 162],[23, 42],[24, 161],[25, 160],[26, 42],[27, 158]]) as Theme

export const dark_green_alt1_Checkbox = n510 as Theme
export const dark_green_alt1_Switch = n510 as Theme
export const dark_green_alt1_TooltipContent = n510 as Theme
export const dark_green_alt1_SliderTrack = n510 as Theme
const n511 = t([[12, 0],[13, 163],[14, 162],[15, 161],[16, 0],[17, 0],[18, 154],[19, 155],[20, 154],[21, 155],[22, 153],[23, 161],[24, 42],[25, 162],[26, 161],[27, 155]]) as Theme

export const dark_green_alt1_SwitchThumb = n511 as Theme
const n512 = t([[12, 42],[13, 160],[14, 158],[15, 157],[16, 161],[17, 162],[18, 154],[19, 155],[20, 154],[21, 155],[22, 155],[23, 157],[24, 156],[25, 158],[26, 157],[27, 160]]) as Theme

export const dark_green_alt1_SliderTrackActive = n512 as Theme
const n513 = t([[12, 162],[13, 161],[14, 42],[15, 160],[16, 163],[17, 0],[18, 154],[19, 155],[20, 154],[21, 155],[22, 153],[23, 160],[24, 158],[25, 42],[26, 160],[27, 157]]) as Theme

export const dark_green_alt1_SliderThumb = n513 as Theme
export const dark_green_alt1_Tooltip = n513 as Theme
export const dark_green_alt1_ProgressIndicator = n513 as Theme
const n514 = t([[12, 155],[13, 156],[14, 157],[15, 158],[16, 154],[17, 153],[18, 163],[19, 162],[20, 163],[21, 162],[22, 0],[23, 160],[24, 42],[25, 158],[26, 160],[27, 42]]) as Theme

export const dark_green_alt1_Input = n514 as Theme
export const dark_green_alt1_TextArea = n514 as Theme
const n515 = t([[12, 156],[13, 157],[14, 158],[15, 160],[16, 155],[17, 154],[18, 162],[19, 161],[20, 162],[21, 161],[22, 163],[23, 160],[24, 42],[25, 158],[26, 160],[27, 160]]) as Theme

export const dark_green_alt2_ListItem = n515 as Theme
const n516 = t([[12, 157],[13, 158],[14, 160],[15, 42],[16, 156],[17, 155],[18, 162],[19, 161],[20, 162],[21, 161],[22, 162],[23, 42],[24, 161],[25, 160],[26, 42],[27, 158]]) as Theme

export const dark_green_alt2_Card = n516 as Theme
export const dark_green_alt2_DrawerFrame = n516 as Theme
export const dark_green_alt2_Progress = n516 as Theme
export const dark_green_alt2_TooltipArrow = n516 as Theme
const n517 = t([[12, 158],[13, 160],[14, 42],[15, 161],[16, 157],[17, 156],[18, 162],[19, 161],[20, 162],[21, 161],[22, 161],[23, 266],[24, 266],[25, 42],[26, 161],[27, 157]]) as Theme

export const dark_green_alt2_Button = n517 as Theme
const n518 = t([[12, 158],[13, 160],[14, 42],[15, 161],[16, 157],[17, 156],[18, 162],[19, 161],[20, 162],[21, 161],[22, 161],[23, 161],[24, 162],[25, 42],[26, 161],[27, 157]]) as Theme

export const dark_green_alt2_Checkbox = n518 as Theme
export const dark_green_alt2_Switch = n518 as Theme
export const dark_green_alt2_TooltipContent = n518 as Theme
export const dark_green_alt2_SliderTrack = n518 as Theme
const n519 = t([[12, 163],[13, 162],[14, 161],[15, 42],[16, 0],[17, 0],[18, 155],[19, 156],[20, 155],[21, 156],[22, 153],[23, 42],[24, 160],[25, 161],[26, 42],[27, 156]]) as Theme

export const dark_green_alt2_SwitchThumb = n519 as Theme
const n520 = t([[12, 160],[13, 158],[14, 157],[15, 156],[16, 42],[17, 161],[18, 155],[19, 156],[20, 155],[21, 156],[22, 156],[23, 156],[24, 155],[25, 157],[26, 156],[27, 42]]) as Theme

export const dark_green_alt2_SliderTrackActive = n520 as Theme
const n521 = t([[12, 161],[13, 42],[14, 160],[15, 158],[16, 162],[17, 163],[18, 155],[19, 156],[20, 155],[21, 156],[22, 154],[23, 158],[24, 157],[25, 160],[26, 158],[27, 158]]) as Theme

export const dark_green_alt2_SliderThumb = n521 as Theme
export const dark_green_alt2_Tooltip = n521 as Theme
export const dark_green_alt2_ProgressIndicator = n521 as Theme
const n522 = t([[12, 156],[13, 157],[14, 158],[15, 160],[16, 155],[17, 154],[18, 162],[19, 161],[20, 162],[21, 161],[22, 163],[23, 42],[24, 161],[25, 160],[26, 42],[27, 160]]) as Theme

export const dark_green_alt2_Input = n522 as Theme
export const dark_green_alt2_TextArea = n522 as Theme
const n523 = t([[12, 157],[13, 158],[14, 160],[15, 42],[16, 156],[17, 155],[19, 42],[20, 161],[21, 42],[22, 162],[23, 42],[24, 161],[25, 160],[26, 42],[27, 158]]) as Theme

export const dark_green_active_ListItem = n523 as Theme
const n524 = t([[12, 158],[13, 160],[14, 42],[15, 161],[16, 157],[17, 156],[19, 42],[20, 161],[21, 42],[22, 161],[23, 161],[24, 162],[25, 42],[26, 161],[27, 157]]) as Theme

export const dark_green_active_Card = n524 as Theme
export const dark_green_active_DrawerFrame = n524 as Theme
export const dark_green_active_Progress = n524 as Theme
export const dark_green_active_TooltipArrow = n524 as Theme
const n525 = t([[12, 160],[13, 42],[14, 161],[15, 162],[16, 158],[17, 157],[19, 42],[20, 161],[21, 42],[22, 42],[23, 266],[24, 266],[25, 161],[26, 162],[27, 156]]) as Theme

export const dark_green_active_Button = n525 as Theme
const n526 = t([[12, 160],[13, 42],[14, 161],[15, 162],[16, 158],[17, 157],[19, 42],[20, 161],[21, 42],[22, 42],[23, 162],[24, 163],[25, 161],[26, 162],[27, 156]]) as Theme

export const dark_green_active_Checkbox = n526 as Theme
export const dark_green_active_Switch = n526 as Theme
export const dark_green_active_TooltipContent = n526 as Theme
export const dark_green_active_SliderTrack = n526 as Theme
const n527 = t([[12, 162],[13, 161],[14, 42],[15, 160],[16, 163],[17, 0],[19, 157],[20, 156],[21, 157],[22, 153],[23, 160],[24, 158],[25, 42],[26, 160],[27, 157]]) as Theme

export const dark_green_active_SwitchThumb = n527 as Theme
const n528 = t([[12, 158],[13, 157],[14, 156],[15, 155],[16, 160],[17, 42],[19, 157],[20, 156],[21, 157],[22, 157],[23, 155],[24, 154],[25, 156],[26, 155],[27, 161]]) as Theme

export const dark_green_active_SliderTrackActive = n528 as Theme
const n529 = t([[12, 42],[13, 160],[14, 158],[15, 157],[16, 161],[17, 162],[19, 157],[20, 156],[21, 157],[22, 155],[23, 157],[24, 156],[25, 158],[26, 157],[27, 160]]) as Theme

export const dark_green_active_SliderThumb = n529 as Theme
export const dark_green_active_Tooltip = n529 as Theme
export const dark_green_active_ProgressIndicator = n529 as Theme
const n530 = t([[12, 157],[13, 158],[14, 160],[15, 42],[16, 156],[17, 155],[19, 42],[20, 161],[21, 42],[22, 162],[23, 161],[24, 162],[25, 42],[26, 161],[27, 158]]) as Theme

export const dark_green_active_Input = n530 as Theme
export const dark_green_active_TextArea = n530 as Theme
const n531 = t([[12, 133],[13, 134],[14, 135],[15, 136],[16, 132],[17, 131],[18, 141],[19, 140],[20, 141],[21, 140],[22, 0],[23, 136],[24, 138],[25, 135],[26, 136],[27, 22]]) as Theme

export const dark_blue_alt1_ListItem = n531 as Theme
const n532 = t([[12, 134],[13, 135],[14, 136],[15, 138],[16, 133],[17, 132],[18, 141],[19, 140],[20, 141],[21, 140],[22, 141],[23, 138],[24, 22],[25, 136],[26, 138],[27, 138]]) as Theme

export const dark_blue_alt1_Card = n532 as Theme
export const dark_blue_alt1_DrawerFrame = n532 as Theme
export const dark_blue_alt1_Progress = n532 as Theme
export const dark_blue_alt1_TooltipArrow = n532 as Theme
const n533 = t([[12, 135],[13, 136],[14, 138],[15, 22],[16, 134],[17, 133],[18, 141],[19, 140],[20, 141],[21, 140],[22, 140],[23, 266],[24, 266],[25, 138],[26, 22],[27, 136]]) as Theme

export const dark_blue_alt1_Button = n533 as Theme
const n534 = t([[12, 135],[13, 136],[14, 138],[15, 22],[16, 134],[17, 133],[18, 141],[19, 140],[20, 141],[21, 140],[22, 140],[23, 22],[24, 139],[25, 138],[26, 22],[27, 136]]) as Theme

export const dark_blue_alt1_Checkbox = n534 as Theme
export const dark_blue_alt1_Switch = n534 as Theme
export const dark_blue_alt1_TooltipContent = n534 as Theme
export const dark_blue_alt1_SliderTrack = n534 as Theme
const n535 = t([[12, 0],[13, 141],[14, 140],[15, 139],[16, 0],[17, 0],[18, 132],[19, 133],[20, 132],[21, 133],[22, 131],[23, 139],[24, 22],[25, 140],[26, 139],[27, 133]]) as Theme

export const dark_blue_alt1_SwitchThumb = n535 as Theme
const n536 = t([[12, 22],[13, 138],[14, 136],[15, 135],[16, 139],[17, 140],[18, 132],[19, 133],[20, 132],[21, 133],[22, 133],[23, 135],[24, 134],[25, 136],[26, 135],[27, 138]]) as Theme

export const dark_blue_alt1_SliderTrackActive = n536 as Theme
const n537 = t([[12, 140],[13, 139],[14, 22],[15, 138],[16, 141],[17, 0],[18, 132],[19, 133],[20, 132],[21, 133],[22, 131],[23, 138],[24, 136],[25, 22],[26, 138],[27, 135]]) as Theme

export const dark_blue_alt1_SliderThumb = n537 as Theme
export const dark_blue_alt1_Tooltip = n537 as Theme
export const dark_blue_alt1_ProgressIndicator = n537 as Theme
const n538 = t([[12, 133],[13, 134],[14, 135],[15, 136],[16, 132],[17, 131],[18, 141],[19, 140],[20, 141],[21, 140],[22, 0],[23, 138],[24, 22],[25, 136],[26, 138],[27, 22]]) as Theme

export const dark_blue_alt1_Input = n538 as Theme
export const dark_blue_alt1_TextArea = n538 as Theme
const n539 = t([[12, 134],[13, 135],[14, 136],[15, 138],[16, 133],[17, 132],[18, 140],[19, 139],[20, 140],[21, 139],[22, 141],[23, 138],[24, 22],[25, 136],[26, 138],[27, 138]]) as Theme

export const dark_blue_alt2_ListItem = n539 as Theme
const n540 = t([[12, 135],[13, 136],[14, 138],[15, 22],[16, 134],[17, 133],[18, 140],[19, 139],[20, 140],[21, 139],[22, 140],[23, 22],[24, 139],[25, 138],[26, 22],[27, 136]]) as Theme

export const dark_blue_alt2_Card = n540 as Theme
export const dark_blue_alt2_DrawerFrame = n540 as Theme
export const dark_blue_alt2_Progress = n540 as Theme
export const dark_blue_alt2_TooltipArrow = n540 as Theme
const n541 = t([[12, 136],[13, 138],[14, 22],[15, 139],[16, 135],[17, 134],[18, 140],[19, 139],[20, 140],[21, 139],[22, 139],[23, 266],[24, 266],[25, 22],[26, 139],[27, 135]]) as Theme

export const dark_blue_alt2_Button = n541 as Theme
const n542 = t([[12, 136],[13, 138],[14, 22],[15, 139],[16, 135],[17, 134],[18, 140],[19, 139],[20, 140],[21, 139],[22, 139],[23, 139],[24, 140],[25, 22],[26, 139],[27, 135]]) as Theme

export const dark_blue_alt2_Checkbox = n542 as Theme
export const dark_blue_alt2_Switch = n542 as Theme
export const dark_blue_alt2_TooltipContent = n542 as Theme
export const dark_blue_alt2_SliderTrack = n542 as Theme
const n543 = t([[12, 141],[13, 140],[14, 139],[15, 22],[16, 0],[17, 0],[18, 133],[19, 134],[20, 133],[21, 134],[22, 131],[23, 22],[24, 138],[25, 139],[26, 22],[27, 134]]) as Theme

export const dark_blue_alt2_SwitchThumb = n543 as Theme
const n544 = t([[12, 138],[13, 136],[14, 135],[15, 134],[16, 22],[17, 139],[18, 133],[19, 134],[20, 133],[21, 134],[22, 134],[23, 134],[24, 133],[25, 135],[26, 134],[27, 22]]) as Theme

export const dark_blue_alt2_SliderTrackActive = n544 as Theme
const n545 = t([[12, 139],[13, 22],[14, 138],[15, 136],[16, 140],[17, 141],[18, 133],[19, 134],[20, 133],[21, 134],[22, 132],[23, 136],[24, 135],[25, 138],[26, 136],[27, 136]]) as Theme

export const dark_blue_alt2_SliderThumb = n545 as Theme
export const dark_blue_alt2_Tooltip = n545 as Theme
export const dark_blue_alt2_ProgressIndicator = n545 as Theme
const n546 = t([[12, 134],[13, 135],[14, 136],[15, 138],[16, 133],[17, 132],[18, 140],[19, 139],[20, 140],[21, 139],[22, 141],[23, 22],[24, 139],[25, 138],[26, 22],[27, 138]]) as Theme

export const dark_blue_alt2_Input = n546 as Theme
export const dark_blue_alt2_TextArea = n546 as Theme
const n547 = t([[12, 135],[13, 136],[14, 138],[15, 22],[16, 134],[17, 133],[19, 22],[20, 139],[21, 22],[22, 140],[23, 22],[24, 139],[25, 138],[26, 22],[27, 136]]) as Theme

export const dark_blue_active_ListItem = n547 as Theme
const n548 = t([[12, 136],[13, 138],[14, 22],[15, 139],[16, 135],[17, 134],[19, 22],[20, 139],[21, 22],[22, 139],[23, 139],[24, 140],[25, 22],[26, 139],[27, 135]]) as Theme

export const dark_blue_active_Card = n548 as Theme
export const dark_blue_active_DrawerFrame = n548 as Theme
export const dark_blue_active_Progress = n548 as Theme
export const dark_blue_active_TooltipArrow = n548 as Theme
const n549 = t([[12, 138],[13, 22],[14, 139],[15, 140],[16, 136],[17, 135],[19, 22],[20, 139],[21, 22],[22, 22],[23, 266],[24, 266],[25, 139],[26, 140],[27, 134]]) as Theme

export const dark_blue_active_Button = n549 as Theme
const n550 = t([[12, 138],[13, 22],[14, 139],[15, 140],[16, 136],[17, 135],[19, 22],[20, 139],[21, 22],[22, 22],[23, 140],[24, 141],[25, 139],[26, 140],[27, 134]]) as Theme

export const dark_blue_active_Checkbox = n550 as Theme
export const dark_blue_active_Switch = n550 as Theme
export const dark_blue_active_TooltipContent = n550 as Theme
export const dark_blue_active_SliderTrack = n550 as Theme
const n551 = t([[12, 140],[13, 139],[14, 22],[15, 138],[16, 141],[17, 0],[19, 135],[20, 134],[21, 135],[22, 131],[23, 138],[24, 136],[25, 22],[26, 138],[27, 135]]) as Theme

export const dark_blue_active_SwitchThumb = n551 as Theme
const n552 = t([[12, 136],[13, 135],[14, 134],[15, 133],[16, 138],[17, 22],[19, 135],[20, 134],[21, 135],[22, 135],[23, 133],[24, 132],[25, 134],[26, 133],[27, 139]]) as Theme

export const dark_blue_active_SliderTrackActive = n552 as Theme
const n553 = t([[12, 22],[13, 138],[14, 136],[15, 135],[16, 139],[17, 140],[19, 135],[20, 134],[21, 135],[22, 133],[23, 135],[24, 134],[25, 136],[26, 135],[27, 138]]) as Theme

export const dark_blue_active_SliderThumb = n553 as Theme
export const dark_blue_active_Tooltip = n553 as Theme
export const dark_blue_active_ProgressIndicator = n553 as Theme
const n554 = t([[12, 135],[13, 136],[14, 138],[15, 22],[16, 134],[17, 133],[19, 22],[20, 139],[21, 22],[22, 140],[23, 139],[24, 140],[25, 22],[26, 139],[27, 136]]) as Theme

export const dark_blue_active_Input = n554 as Theme
export const dark_blue_active_TextArea = n554 as Theme
const n555 = t([[12, 188],[13, 189],[14, 190],[15, 191],[16, 187],[17, 186],[18, 196],[19, 195],[20, 196],[21, 195],[22, 0],[23, 191],[24, 193],[25, 190],[26, 191],[27, 78]]) as Theme

export const dark_purple_alt1_ListItem = n555 as Theme
const n556 = t([[12, 189],[13, 190],[14, 191],[15, 193],[16, 188],[17, 187],[18, 196],[19, 195],[20, 196],[21, 195],[22, 196],[23, 193],[24, 78],[25, 191],[26, 193],[27, 193]]) as Theme

export const dark_purple_alt1_Card = n556 as Theme
export const dark_purple_alt1_DrawerFrame = n556 as Theme
export const dark_purple_alt1_Progress = n556 as Theme
export const dark_purple_alt1_TooltipArrow = n556 as Theme
const n557 = t([[12, 190],[13, 191],[14, 193],[15, 78],[16, 189],[17, 188],[18, 196],[19, 195],[20, 196],[21, 195],[22, 195],[23, 266],[24, 266],[25, 193],[26, 78],[27, 191]]) as Theme

export const dark_purple_alt1_Button = n557 as Theme
const n558 = t([[12, 190],[13, 191],[14, 193],[15, 78],[16, 189],[17, 188],[18, 196],[19, 195],[20, 196],[21, 195],[22, 195],[23, 78],[24, 194],[25, 193],[26, 78],[27, 191]]) as Theme

export const dark_purple_alt1_Checkbox = n558 as Theme
export const dark_purple_alt1_Switch = n558 as Theme
export const dark_purple_alt1_TooltipContent = n558 as Theme
export const dark_purple_alt1_SliderTrack = n558 as Theme
const n559 = t([[12, 0],[13, 196],[14, 195],[15, 194],[16, 0],[17, 0],[18, 187],[19, 188],[20, 187],[21, 188],[22, 186],[23, 194],[24, 78],[25, 195],[26, 194],[27, 188]]) as Theme

export const dark_purple_alt1_SwitchThumb = n559 as Theme
const n560 = t([[12, 78],[13, 193],[14, 191],[15, 190],[16, 194],[17, 195],[18, 187],[19, 188],[20, 187],[21, 188],[22, 188],[23, 190],[24, 189],[25, 191],[26, 190],[27, 193]]) as Theme

export const dark_purple_alt1_SliderTrackActive = n560 as Theme
const n561 = t([[12, 195],[13, 194],[14, 78],[15, 193],[16, 196],[17, 0],[18, 187],[19, 188],[20, 187],[21, 188],[22, 186],[23, 193],[24, 191],[25, 78],[26, 193],[27, 190]]) as Theme

export const dark_purple_alt1_SliderThumb = n561 as Theme
export const dark_purple_alt1_Tooltip = n561 as Theme
export const dark_purple_alt1_ProgressIndicator = n561 as Theme
const n562 = t([[12, 188],[13, 189],[14, 190],[15, 191],[16, 187],[17, 186],[18, 196],[19, 195],[20, 196],[21, 195],[22, 0],[23, 193],[24, 78],[25, 191],[26, 193],[27, 78]]) as Theme

export const dark_purple_alt1_Input = n562 as Theme
export const dark_purple_alt1_TextArea = n562 as Theme
const n563 = t([[12, 189],[13, 190],[14, 191],[15, 193],[16, 188],[17, 187],[18, 195],[19, 194],[20, 195],[21, 194],[22, 196],[23, 193],[24, 78],[25, 191],[26, 193],[27, 193]]) as Theme

export const dark_purple_alt2_ListItem = n563 as Theme
const n564 = t([[12, 190],[13, 191],[14, 193],[15, 78],[16, 189],[17, 188],[18, 195],[19, 194],[20, 195],[21, 194],[22, 195],[23, 78],[24, 194],[25, 193],[26, 78],[27, 191]]) as Theme

export const dark_purple_alt2_Card = n564 as Theme
export const dark_purple_alt2_DrawerFrame = n564 as Theme
export const dark_purple_alt2_Progress = n564 as Theme
export const dark_purple_alt2_TooltipArrow = n564 as Theme
const n565 = t([[12, 191],[13, 193],[14, 78],[15, 194],[16, 190],[17, 189],[18, 195],[19, 194],[20, 195],[21, 194],[22, 194],[23, 266],[24, 266],[25, 78],[26, 194],[27, 190]]) as Theme

export const dark_purple_alt2_Button = n565 as Theme
const n566 = t([[12, 191],[13, 193],[14, 78],[15, 194],[16, 190],[17, 189],[18, 195],[19, 194],[20, 195],[21, 194],[22, 194],[23, 194],[24, 195],[25, 78],[26, 194],[27, 190]]) as Theme

export const dark_purple_alt2_Checkbox = n566 as Theme
export const dark_purple_alt2_Switch = n566 as Theme
export const dark_purple_alt2_TooltipContent = n566 as Theme
export const dark_purple_alt2_SliderTrack = n566 as Theme
const n567 = t([[12, 196],[13, 195],[14, 194],[15, 78],[16, 0],[17, 0],[18, 188],[19, 189],[20, 188],[21, 189],[22, 186],[23, 78],[24, 193],[25, 194],[26, 78],[27, 189]]) as Theme

export const dark_purple_alt2_SwitchThumb = n567 as Theme
const n568 = t([[12, 193],[13, 191],[14, 190],[15, 189],[16, 78],[17, 194],[18, 188],[19, 189],[20, 188],[21, 189],[22, 189],[23, 189],[24, 188],[25, 190],[26, 189],[27, 78]]) as Theme

export const dark_purple_alt2_SliderTrackActive = n568 as Theme
const n569 = t([[12, 194],[13, 78],[14, 193],[15, 191],[16, 195],[17, 196],[18, 188],[19, 189],[20, 188],[21, 189],[22, 187],[23, 191],[24, 190],[25, 193],[26, 191],[27, 191]]) as Theme

export const dark_purple_alt2_SliderThumb = n569 as Theme
export const dark_purple_alt2_Tooltip = n569 as Theme
export const dark_purple_alt2_ProgressIndicator = n569 as Theme
const n570 = t([[12, 189],[13, 190],[14, 191],[15, 193],[16, 188],[17, 187],[18, 195],[19, 194],[20, 195],[21, 194],[22, 196],[23, 78],[24, 194],[25, 193],[26, 78],[27, 193]]) as Theme

export const dark_purple_alt2_Input = n570 as Theme
export const dark_purple_alt2_TextArea = n570 as Theme
const n571 = t([[12, 190],[13, 191],[14, 193],[15, 78],[16, 189],[17, 188],[19, 78],[20, 194],[21, 78],[22, 195],[23, 78],[24, 194],[25, 193],[26, 78],[27, 191]]) as Theme

export const dark_purple_active_ListItem = n571 as Theme
const n572 = t([[12, 191],[13, 193],[14, 78],[15, 194],[16, 190],[17, 189],[19, 78],[20, 194],[21, 78],[22, 194],[23, 194],[24, 195],[25, 78],[26, 194],[27, 190]]) as Theme

export const dark_purple_active_Card = n572 as Theme
export const dark_purple_active_DrawerFrame = n572 as Theme
export const dark_purple_active_Progress = n572 as Theme
export const dark_purple_active_TooltipArrow = n572 as Theme
const n573 = t([[12, 193],[13, 78],[14, 194],[15, 195],[16, 191],[17, 190],[19, 78],[20, 194],[21, 78],[22, 78],[23, 266],[24, 266],[25, 194],[26, 195],[27, 189]]) as Theme

export const dark_purple_active_Button = n573 as Theme
const n574 = t([[12, 193],[13, 78],[14, 194],[15, 195],[16, 191],[17, 190],[19, 78],[20, 194],[21, 78],[22, 78],[23, 195],[24, 196],[25, 194],[26, 195],[27, 189]]) as Theme

export const dark_purple_active_Checkbox = n574 as Theme
export const dark_purple_active_Switch = n574 as Theme
export const dark_purple_active_TooltipContent = n574 as Theme
export const dark_purple_active_SliderTrack = n574 as Theme
const n575 = t([[12, 195],[13, 194],[14, 78],[15, 193],[16, 196],[17, 0],[19, 190],[20, 189],[21, 190],[22, 186],[23, 193],[24, 191],[25, 78],[26, 193],[27, 190]]) as Theme

export const dark_purple_active_SwitchThumb = n575 as Theme
const n576 = t([[12, 191],[13, 190],[14, 189],[15, 188],[16, 193],[17, 78],[19, 190],[20, 189],[21, 190],[22, 190],[23, 188],[24, 187],[25, 189],[26, 188],[27, 194]]) as Theme

export const dark_purple_active_SliderTrackActive = n576 as Theme
const n577 = t([[12, 78],[13, 193],[14, 191],[15, 190],[16, 194],[17, 195],[19, 190],[20, 189],[21, 190],[22, 188],[23, 190],[24, 189],[25, 191],[26, 190],[27, 193]]) as Theme

export const dark_purple_active_SliderThumb = n577 as Theme
export const dark_purple_active_Tooltip = n577 as Theme
export const dark_purple_active_ProgressIndicator = n577 as Theme
const n578 = t([[12, 190],[13, 191],[14, 193],[15, 78],[16, 189],[17, 188],[19, 78],[20, 194],[21, 78],[22, 195],[23, 194],[24, 195],[25, 78],[26, 194],[27, 191]]) as Theme

export const dark_purple_active_Input = n578 as Theme
export const dark_purple_active_TextArea = n578 as Theme
const n579 = t([[12, 177],[13, 178],[14, 179],[15, 180],[16, 176],[17, 175],[18, 185],[19, 184],[20, 185],[21, 184],[22, 0],[23, 180],[24, 182],[25, 179],[26, 180],[27, 66]]) as Theme

export const dark_pink_alt1_ListItem = n579 as Theme
const n580 = t([[12, 178],[13, 179],[14, 180],[15, 182],[16, 177],[17, 176],[18, 185],[19, 184],[20, 185],[21, 184],[22, 185],[23, 182],[24, 66],[25, 180],[26, 182],[27, 182]]) as Theme

export const dark_pink_alt1_Card = n580 as Theme
export const dark_pink_alt1_DrawerFrame = n580 as Theme
export const dark_pink_alt1_Progress = n580 as Theme
export const dark_pink_alt1_TooltipArrow = n580 as Theme
const n581 = t([[12, 179],[13, 180],[14, 182],[15, 66],[16, 178],[17, 177],[18, 185],[19, 184],[20, 185],[21, 184],[22, 184],[23, 266],[24, 266],[25, 182],[26, 66],[27, 180]]) as Theme

export const dark_pink_alt1_Button = n581 as Theme
const n582 = t([[12, 179],[13, 180],[14, 182],[15, 66],[16, 178],[17, 177],[18, 185],[19, 184],[20, 185],[21, 184],[22, 184],[23, 66],[24, 183],[25, 182],[26, 66],[27, 180]]) as Theme

export const dark_pink_alt1_Checkbox = n582 as Theme
export const dark_pink_alt1_Switch = n582 as Theme
export const dark_pink_alt1_TooltipContent = n582 as Theme
export const dark_pink_alt1_SliderTrack = n582 as Theme
const n583 = t([[12, 0],[13, 185],[14, 184],[15, 183],[16, 0],[17, 0],[18, 176],[19, 177],[20, 176],[21, 177],[22, 175],[23, 183],[24, 66],[25, 184],[26, 183],[27, 177]]) as Theme

export const dark_pink_alt1_SwitchThumb = n583 as Theme
const n584 = t([[12, 66],[13, 182],[14, 180],[15, 179],[16, 183],[17, 184],[18, 176],[19, 177],[20, 176],[21, 177],[22, 177],[23, 179],[24, 178],[25, 180],[26, 179],[27, 182]]) as Theme

export const dark_pink_alt1_SliderTrackActive = n584 as Theme
const n585 = t([[12, 184],[13, 183],[14, 66],[15, 182],[16, 185],[17, 0],[18, 176],[19, 177],[20, 176],[21, 177],[22, 175],[23, 182],[24, 180],[25, 66],[26, 182],[27, 179]]) as Theme

export const dark_pink_alt1_SliderThumb = n585 as Theme
export const dark_pink_alt1_Tooltip = n585 as Theme
export const dark_pink_alt1_ProgressIndicator = n585 as Theme
const n586 = t([[12, 177],[13, 178],[14, 179],[15, 180],[16, 176],[17, 175],[18, 185],[19, 184],[20, 185],[21, 184],[22, 0],[23, 182],[24, 66],[25, 180],[26, 182],[27, 66]]) as Theme

export const dark_pink_alt1_Input = n586 as Theme
export const dark_pink_alt1_TextArea = n586 as Theme
const n587 = t([[12, 178],[13, 179],[14, 180],[15, 182],[16, 177],[17, 176],[18, 184],[19, 183],[20, 184],[21, 183],[22, 185],[23, 182],[24, 66],[25, 180],[26, 182],[27, 182]]) as Theme

export const dark_pink_alt2_ListItem = n587 as Theme
const n588 = t([[12, 179],[13, 180],[14, 182],[15, 66],[16, 178],[17, 177],[18, 184],[19, 183],[20, 184],[21, 183],[22, 184],[23, 66],[24, 183],[25, 182],[26, 66],[27, 180]]) as Theme

export const dark_pink_alt2_Card = n588 as Theme
export const dark_pink_alt2_DrawerFrame = n588 as Theme
export const dark_pink_alt2_Progress = n588 as Theme
export const dark_pink_alt2_TooltipArrow = n588 as Theme
const n589 = t([[12, 180],[13, 182],[14, 66],[15, 183],[16, 179],[17, 178],[18, 184],[19, 183],[20, 184],[21, 183],[22, 183],[23, 266],[24, 266],[25, 66],[26, 183],[27, 179]]) as Theme

export const dark_pink_alt2_Button = n589 as Theme
const n590 = t([[12, 180],[13, 182],[14, 66],[15, 183],[16, 179],[17, 178],[18, 184],[19, 183],[20, 184],[21, 183],[22, 183],[23, 183],[24, 184],[25, 66],[26, 183],[27, 179]]) as Theme

export const dark_pink_alt2_Checkbox = n590 as Theme
export const dark_pink_alt2_Switch = n590 as Theme
export const dark_pink_alt2_TooltipContent = n590 as Theme
export const dark_pink_alt2_SliderTrack = n590 as Theme
const n591 = t([[12, 185],[13, 184],[14, 183],[15, 66],[16, 0],[17, 0],[18, 177],[19, 178],[20, 177],[21, 178],[22, 175],[23, 66],[24, 182],[25, 183],[26, 66],[27, 178]]) as Theme

export const dark_pink_alt2_SwitchThumb = n591 as Theme
const n592 = t([[12, 182],[13, 180],[14, 179],[15, 178],[16, 66],[17, 183],[18, 177],[19, 178],[20, 177],[21, 178],[22, 178],[23, 178],[24, 177],[25, 179],[26, 178],[27, 66]]) as Theme

export const dark_pink_alt2_SliderTrackActive = n592 as Theme
const n593 = t([[12, 183],[13, 66],[14, 182],[15, 180],[16, 184],[17, 185],[18, 177],[19, 178],[20, 177],[21, 178],[22, 176],[23, 180],[24, 179],[25, 182],[26, 180],[27, 180]]) as Theme

export const dark_pink_alt2_SliderThumb = n593 as Theme
export const dark_pink_alt2_Tooltip = n593 as Theme
export const dark_pink_alt2_ProgressIndicator = n593 as Theme
const n594 = t([[12, 178],[13, 179],[14, 180],[15, 182],[16, 177],[17, 176],[18, 184],[19, 183],[20, 184],[21, 183],[22, 185],[23, 66],[24, 183],[25, 182],[26, 66],[27, 182]]) as Theme

export const dark_pink_alt2_Input = n594 as Theme
export const dark_pink_alt2_TextArea = n594 as Theme
const n595 = t([[12, 179],[13, 180],[14, 182],[15, 66],[16, 178],[17, 177],[19, 66],[20, 183],[21, 66],[22, 184],[23, 66],[24, 183],[25, 182],[26, 66],[27, 180]]) as Theme

export const dark_pink_active_ListItem = n595 as Theme
const n596 = t([[12, 180],[13, 182],[14, 66],[15, 183],[16, 179],[17, 178],[19, 66],[20, 183],[21, 66],[22, 183],[23, 183],[24, 184],[25, 66],[26, 183],[27, 179]]) as Theme

export const dark_pink_active_Card = n596 as Theme
export const dark_pink_active_DrawerFrame = n596 as Theme
export const dark_pink_active_Progress = n596 as Theme
export const dark_pink_active_TooltipArrow = n596 as Theme
const n597 = t([[12, 182],[13, 66],[14, 183],[15, 184],[16, 180],[17, 179],[19, 66],[20, 183],[21, 66],[22, 66],[23, 266],[24, 266],[25, 183],[26, 184],[27, 178]]) as Theme

export const dark_pink_active_Button = n597 as Theme
const n598 = t([[12, 182],[13, 66],[14, 183],[15, 184],[16, 180],[17, 179],[19, 66],[20, 183],[21, 66],[22, 66],[23, 184],[24, 185],[25, 183],[26, 184],[27, 178]]) as Theme

export const dark_pink_active_Checkbox = n598 as Theme
export const dark_pink_active_Switch = n598 as Theme
export const dark_pink_active_TooltipContent = n598 as Theme
export const dark_pink_active_SliderTrack = n598 as Theme
const n599 = t([[12, 184],[13, 183],[14, 66],[15, 182],[16, 185],[17, 0],[19, 179],[20, 178],[21, 179],[22, 175],[23, 182],[24, 180],[25, 66],[26, 182],[27, 179]]) as Theme

export const dark_pink_active_SwitchThumb = n599 as Theme
const n600 = t([[12, 180],[13, 179],[14, 178],[15, 177],[16, 182],[17, 66],[19, 179],[20, 178],[21, 179],[22, 179],[23, 177],[24, 176],[25, 178],[26, 177],[27, 183]]) as Theme

export const dark_pink_active_SliderTrackActive = n600 as Theme
const n601 = t([[12, 66],[13, 182],[14, 180],[15, 179],[16, 183],[17, 184],[19, 179],[20, 178],[21, 179],[22, 177],[23, 179],[24, 178],[25, 180],[26, 179],[27, 182]]) as Theme

export const dark_pink_active_SliderThumb = n601 as Theme
export const dark_pink_active_Tooltip = n601 as Theme
export const dark_pink_active_ProgressIndicator = n601 as Theme
const n602 = t([[12, 179],[13, 180],[14, 182],[15, 66],[16, 178],[17, 177],[19, 66],[20, 183],[21, 66],[22, 184],[23, 183],[24, 184],[25, 66],[26, 183],[27, 180]]) as Theme

export const dark_pink_active_Input = n602 as Theme
export const dark_pink_active_TextArea = n602 as Theme
const n603 = t([[12, 199],[13, 200],[14, 201],[15, 202],[16, 198],[17, 197],[18, 207],[19, 206],[20, 207],[21, 206],[22, 0],[23, 202],[24, 204],[25, 201],[26, 202],[27, 90]]) as Theme

export const dark_red_alt1_ListItem = n603 as Theme
const n604 = t([[12, 200],[13, 201],[14, 202],[15, 204],[16, 199],[17, 198],[18, 207],[19, 206],[20, 207],[21, 206],[22, 207],[23, 204],[24, 90],[25, 202],[26, 204],[27, 204]]) as Theme

export const dark_red_alt1_Card = n604 as Theme
export const dark_red_alt1_DrawerFrame = n604 as Theme
export const dark_red_alt1_Progress = n604 as Theme
export const dark_red_alt1_TooltipArrow = n604 as Theme
const n605 = t([[12, 201],[13, 202],[14, 204],[15, 90],[16, 200],[17, 199],[18, 207],[19, 206],[20, 207],[21, 206],[22, 206],[23, 266],[24, 266],[25, 204],[26, 90],[27, 202]]) as Theme

export const dark_red_alt1_Button = n605 as Theme
const n606 = t([[12, 201],[13, 202],[14, 204],[15, 90],[16, 200],[17, 199],[18, 207],[19, 206],[20, 207],[21, 206],[22, 206],[23, 90],[24, 205],[25, 204],[26, 90],[27, 202]]) as Theme

export const dark_red_alt1_Checkbox = n606 as Theme
export const dark_red_alt1_Switch = n606 as Theme
export const dark_red_alt1_TooltipContent = n606 as Theme
export const dark_red_alt1_SliderTrack = n606 as Theme
const n607 = t([[12, 0],[13, 207],[14, 206],[15, 205],[16, 0],[17, 0],[18, 198],[19, 199],[20, 198],[21, 199],[22, 197],[23, 205],[24, 90],[25, 206],[26, 205],[27, 199]]) as Theme

export const dark_red_alt1_SwitchThumb = n607 as Theme
const n608 = t([[12, 90],[13, 204],[14, 202],[15, 201],[16, 205],[17, 206],[18, 198],[19, 199],[20, 198],[21, 199],[22, 199],[23, 201],[24, 200],[25, 202],[26, 201],[27, 204]]) as Theme

export const dark_red_alt1_SliderTrackActive = n608 as Theme
const n609 = t([[12, 206],[13, 205],[14, 90],[15, 204],[16, 207],[17, 0],[18, 198],[19, 199],[20, 198],[21, 199],[22, 197],[23, 204],[24, 202],[25, 90],[26, 204],[27, 201]]) as Theme

export const dark_red_alt1_SliderThumb = n609 as Theme
export const dark_red_alt1_Tooltip = n609 as Theme
export const dark_red_alt1_ProgressIndicator = n609 as Theme
const n610 = t([[12, 199],[13, 200],[14, 201],[15, 202],[16, 198],[17, 197],[18, 207],[19, 206],[20, 207],[21, 206],[22, 0],[23, 204],[24, 90],[25, 202],[26, 204],[27, 90]]) as Theme

export const dark_red_alt1_Input = n610 as Theme
export const dark_red_alt1_TextArea = n610 as Theme
const n611 = t([[12, 200],[13, 201],[14, 202],[15, 204],[16, 199],[17, 198],[18, 206],[19, 205],[20, 206],[21, 205],[22, 207],[23, 204],[24, 90],[25, 202],[26, 204],[27, 204]]) as Theme

export const dark_red_alt2_ListItem = n611 as Theme
const n612 = t([[12, 201],[13, 202],[14, 204],[15, 90],[16, 200],[17, 199],[18, 206],[19, 205],[20, 206],[21, 205],[22, 206],[23, 90],[24, 205],[25, 204],[26, 90],[27, 202]]) as Theme

export const dark_red_alt2_Card = n612 as Theme
export const dark_red_alt2_DrawerFrame = n612 as Theme
export const dark_red_alt2_Progress = n612 as Theme
export const dark_red_alt2_TooltipArrow = n612 as Theme
const n613 = t([[12, 202],[13, 204],[14, 90],[15, 205],[16, 201],[17, 200],[18, 206],[19, 205],[20, 206],[21, 205],[22, 205],[23, 266],[24, 266],[25, 90],[26, 205],[27, 201]]) as Theme

export const dark_red_alt2_Button = n613 as Theme
const n614 = t([[12, 202],[13, 204],[14, 90],[15, 205],[16, 201],[17, 200],[18, 206],[19, 205],[20, 206],[21, 205],[22, 205],[23, 205],[24, 206],[25, 90],[26, 205],[27, 201]]) as Theme

export const dark_red_alt2_Checkbox = n614 as Theme
export const dark_red_alt2_Switch = n614 as Theme
export const dark_red_alt2_TooltipContent = n614 as Theme
export const dark_red_alt2_SliderTrack = n614 as Theme
const n615 = t([[12, 207],[13, 206],[14, 205],[15, 90],[16, 0],[17, 0],[18, 199],[19, 200],[20, 199],[21, 200],[22, 197],[23, 90],[24, 204],[25, 205],[26, 90],[27, 200]]) as Theme

export const dark_red_alt2_SwitchThumb = n615 as Theme
const n616 = t([[12, 204],[13, 202],[14, 201],[15, 200],[16, 90],[17, 205],[18, 199],[19, 200],[20, 199],[21, 200],[22, 200],[23, 200],[24, 199],[25, 201],[26, 200],[27, 90]]) as Theme

export const dark_red_alt2_SliderTrackActive = n616 as Theme
const n617 = t([[12, 205],[13, 90],[14, 204],[15, 202],[16, 206],[17, 207],[18, 199],[19, 200],[20, 199],[21, 200],[22, 198],[23, 202],[24, 201],[25, 204],[26, 202],[27, 202]]) as Theme

export const dark_red_alt2_SliderThumb = n617 as Theme
export const dark_red_alt2_Tooltip = n617 as Theme
export const dark_red_alt2_ProgressIndicator = n617 as Theme
const n618 = t([[12, 200],[13, 201],[14, 202],[15, 204],[16, 199],[17, 198],[18, 206],[19, 205],[20, 206],[21, 205],[22, 207],[23, 90],[24, 205],[25, 204],[26, 90],[27, 204]]) as Theme

export const dark_red_alt2_Input = n618 as Theme
export const dark_red_alt2_TextArea = n618 as Theme
const n619 = t([[12, 201],[13, 202],[14, 204],[15, 90],[16, 200],[17, 199],[19, 90],[20, 205],[21, 90],[22, 206],[23, 90],[24, 205],[25, 204],[26, 90],[27, 202]]) as Theme

export const dark_red_active_ListItem = n619 as Theme
const n620 = t([[12, 202],[13, 204],[14, 90],[15, 205],[16, 201],[17, 200],[19, 90],[20, 205],[21, 90],[22, 205],[23, 205],[24, 206],[25, 90],[26, 205],[27, 201]]) as Theme

export const dark_red_active_Card = n620 as Theme
export const dark_red_active_DrawerFrame = n620 as Theme
export const dark_red_active_Progress = n620 as Theme
export const dark_red_active_TooltipArrow = n620 as Theme
const n621 = t([[12, 204],[13, 90],[14, 205],[15, 206],[16, 202],[17, 201],[19, 90],[20, 205],[21, 90],[22, 90],[23, 266],[24, 266],[25, 205],[26, 206],[27, 200]]) as Theme

export const dark_red_active_Button = n621 as Theme
const n622 = t([[12, 204],[13, 90],[14, 205],[15, 206],[16, 202],[17, 201],[19, 90],[20, 205],[21, 90],[22, 90],[23, 206],[24, 207],[25, 205],[26, 206],[27, 200]]) as Theme

export const dark_red_active_Checkbox = n622 as Theme
export const dark_red_active_Switch = n622 as Theme
export const dark_red_active_TooltipContent = n622 as Theme
export const dark_red_active_SliderTrack = n622 as Theme
const n623 = t([[12, 206],[13, 205],[14, 90],[15, 204],[16, 207],[17, 0],[19, 201],[20, 200],[21, 201],[22, 197],[23, 204],[24, 202],[25, 90],[26, 204],[27, 201]]) as Theme

export const dark_red_active_SwitchThumb = n623 as Theme
const n624 = t([[12, 202],[13, 201],[14, 200],[15, 199],[16, 204],[17, 90],[19, 201],[20, 200],[21, 201],[22, 201],[23, 199],[24, 198],[25, 200],[26, 199],[27, 205]]) as Theme

export const dark_red_active_SliderTrackActive = n624 as Theme
const n625 = t([[12, 90],[13, 204],[14, 202],[15, 201],[16, 205],[17, 206],[19, 201],[20, 200],[21, 201],[22, 199],[23, 201],[24, 200],[25, 202],[26, 201],[27, 204]]) as Theme

export const dark_red_active_SliderThumb = n625 as Theme
export const dark_red_active_Tooltip = n625 as Theme
export const dark_red_active_ProgressIndicator = n625 as Theme
const n626 = t([[12, 201],[13, 202],[14, 204],[15, 90],[16, 200],[17, 199],[19, 90],[20, 205],[21, 90],[22, 206],[23, 205],[24, 206],[25, 90],[26, 205],[27, 202]]) as Theme

export const dark_red_active_Input = n626 as Theme
export const dark_red_active_TextArea = n626 as Theme
const n627 = t([[12, 221],[13, 222],[14, 223],[15, 224],[16, 220],[17, 219],[18, 229],[19, 228],[20, 229],[21, 228],[22, 0],[23, 224],[24, 226],[25, 223],[26, 224],[27, 114]]) as Theme

export const dark_gold_alt1_ListItem = n627 as Theme
const n628 = t([[12, 222],[13, 223],[14, 224],[15, 226],[16, 221],[17, 220],[18, 229],[19, 228],[20, 229],[21, 228],[22, 229],[23, 226],[24, 114],[25, 224],[26, 226],[27, 226]]) as Theme

export const dark_gold_alt1_Card = n628 as Theme
export const dark_gold_alt1_DrawerFrame = n628 as Theme
export const dark_gold_alt1_Progress = n628 as Theme
export const dark_gold_alt1_TooltipArrow = n628 as Theme
const n629 = t([[12, 223],[13, 224],[14, 226],[15, 114],[16, 222],[17, 221],[18, 229],[19, 228],[20, 229],[21, 228],[22, 228],[23, 266],[24, 266],[25, 226],[26, 114],[27, 224]]) as Theme

export const dark_gold_alt1_Button = n629 as Theme
const n630 = t([[12, 223],[13, 224],[14, 226],[15, 114],[16, 222],[17, 221],[18, 229],[19, 228],[20, 229],[21, 228],[22, 228],[23, 114],[24, 227],[25, 226],[26, 114],[27, 224]]) as Theme

export const dark_gold_alt1_Checkbox = n630 as Theme
export const dark_gold_alt1_Switch = n630 as Theme
export const dark_gold_alt1_TooltipContent = n630 as Theme
export const dark_gold_alt1_SliderTrack = n630 as Theme
const n631 = t([[12, 0],[13, 229],[14, 228],[15, 227],[16, 0],[17, 0],[18, 220],[19, 221],[20, 220],[21, 221],[22, 219],[23, 227],[24, 114],[25, 228],[26, 227],[27, 221]]) as Theme

export const dark_gold_alt1_SwitchThumb = n631 as Theme
const n632 = t([[12, 114],[13, 226],[14, 224],[15, 223],[16, 227],[17, 228],[18, 220],[19, 221],[20, 220],[21, 221],[22, 221],[23, 223],[24, 222],[25, 224],[26, 223],[27, 226]]) as Theme

export const dark_gold_alt1_SliderTrackActive = n632 as Theme
const n633 = t([[12, 228],[13, 227],[14, 114],[15, 226],[16, 229],[17, 0],[18, 220],[19, 221],[20, 220],[21, 221],[22, 219],[23, 226],[24, 224],[25, 114],[26, 226],[27, 223]]) as Theme

export const dark_gold_alt1_SliderThumb = n633 as Theme
export const dark_gold_alt1_Tooltip = n633 as Theme
export const dark_gold_alt1_ProgressIndicator = n633 as Theme
const n634 = t([[12, 221],[13, 222],[14, 223],[15, 224],[16, 220],[17, 219],[18, 229],[19, 228],[20, 229],[21, 228],[22, 0],[23, 226],[24, 114],[25, 224],[26, 226],[27, 114]]) as Theme

export const dark_gold_alt1_Input = n634 as Theme
export const dark_gold_alt1_TextArea = n634 as Theme
const n635 = t([[12, 222],[13, 223],[14, 224],[15, 226],[16, 221],[17, 220],[18, 228],[19, 227],[20, 228],[21, 227],[22, 229],[23, 226],[24, 114],[25, 224],[26, 226],[27, 226]]) as Theme

export const dark_gold_alt2_ListItem = n635 as Theme
const n636 = t([[12, 223],[13, 224],[14, 226],[15, 114],[16, 222],[17, 221],[18, 228],[19, 227],[20, 228],[21, 227],[22, 228],[23, 114],[24, 227],[25, 226],[26, 114],[27, 224]]) as Theme

export const dark_gold_alt2_Card = n636 as Theme
export const dark_gold_alt2_DrawerFrame = n636 as Theme
export const dark_gold_alt2_Progress = n636 as Theme
export const dark_gold_alt2_TooltipArrow = n636 as Theme
const n637 = t([[12, 224],[13, 226],[14, 114],[15, 227],[16, 223],[17, 222],[18, 228],[19, 227],[20, 228],[21, 227],[22, 227],[23, 266],[24, 266],[25, 114],[26, 227],[27, 223]]) as Theme

export const dark_gold_alt2_Button = n637 as Theme
const n638 = t([[12, 224],[13, 226],[14, 114],[15, 227],[16, 223],[17, 222],[18, 228],[19, 227],[20, 228],[21, 227],[22, 227],[23, 227],[24, 228],[25, 114],[26, 227],[27, 223]]) as Theme

export const dark_gold_alt2_Checkbox = n638 as Theme
export const dark_gold_alt2_Switch = n638 as Theme
export const dark_gold_alt2_TooltipContent = n638 as Theme
export const dark_gold_alt2_SliderTrack = n638 as Theme
const n639 = t([[12, 229],[13, 228],[14, 227],[15, 114],[16, 0],[17, 0],[18, 221],[19, 222],[20, 221],[21, 222],[22, 219],[23, 114],[24, 226],[25, 227],[26, 114],[27, 222]]) as Theme

export const dark_gold_alt2_SwitchThumb = n639 as Theme
const n640 = t([[12, 226],[13, 224],[14, 223],[15, 222],[16, 114],[17, 227],[18, 221],[19, 222],[20, 221],[21, 222],[22, 222],[23, 222],[24, 221],[25, 223],[26, 222],[27, 114]]) as Theme

export const dark_gold_alt2_SliderTrackActive = n640 as Theme
const n641 = t([[12, 227],[13, 114],[14, 226],[15, 224],[16, 228],[17, 229],[18, 221],[19, 222],[20, 221],[21, 222],[22, 220],[23, 224],[24, 223],[25, 226],[26, 224],[27, 224]]) as Theme

export const dark_gold_alt2_SliderThumb = n641 as Theme
export const dark_gold_alt2_Tooltip = n641 as Theme
export const dark_gold_alt2_ProgressIndicator = n641 as Theme
const n642 = t([[12, 222],[13, 223],[14, 224],[15, 226],[16, 221],[17, 220],[18, 228],[19, 227],[20, 228],[21, 227],[22, 229],[23, 114],[24, 227],[25, 226],[26, 114],[27, 226]]) as Theme

export const dark_gold_alt2_Input = n642 as Theme
export const dark_gold_alt2_TextArea = n642 as Theme
const n643 = t([[12, 223],[13, 224],[14, 226],[15, 114],[16, 222],[17, 221],[19, 114],[20, 227],[21, 114],[22, 228],[23, 114],[24, 227],[25, 226],[26, 114],[27, 224]]) as Theme

export const dark_gold_active_ListItem = n643 as Theme
const n644 = t([[12, 224],[13, 226],[14, 114],[15, 227],[16, 223],[17, 222],[19, 114],[20, 227],[21, 114],[22, 227],[23, 227],[24, 228],[25, 114],[26, 227],[27, 223]]) as Theme

export const dark_gold_active_Card = n644 as Theme
export const dark_gold_active_DrawerFrame = n644 as Theme
export const dark_gold_active_Progress = n644 as Theme
export const dark_gold_active_TooltipArrow = n644 as Theme
const n645 = t([[12, 226],[13, 114],[14, 227],[15, 228],[16, 224],[17, 223],[19, 114],[20, 227],[21, 114],[22, 114],[23, 266],[24, 266],[25, 227],[26, 228],[27, 222]]) as Theme

export const dark_gold_active_Button = n645 as Theme
const n646 = t([[12, 226],[13, 114],[14, 227],[15, 228],[16, 224],[17, 223],[19, 114],[20, 227],[21, 114],[22, 114],[23, 228],[24, 229],[25, 227],[26, 228],[27, 222]]) as Theme

export const dark_gold_active_Checkbox = n646 as Theme
export const dark_gold_active_Switch = n646 as Theme
export const dark_gold_active_TooltipContent = n646 as Theme
export const dark_gold_active_SliderTrack = n646 as Theme
const n647 = t([[12, 228],[13, 227],[14, 114],[15, 226],[16, 229],[17, 0],[19, 223],[20, 222],[21, 223],[22, 219],[23, 226],[24, 224],[25, 114],[26, 226],[27, 223]]) as Theme

export const dark_gold_active_SwitchThumb = n647 as Theme
const n648 = t([[12, 224],[13, 223],[14, 222],[15, 221],[16, 226],[17, 114],[19, 223],[20, 222],[21, 223],[22, 223],[23, 221],[24, 220],[25, 222],[26, 221],[27, 227]]) as Theme

export const dark_gold_active_SliderTrackActive = n648 as Theme
const n649 = t([[12, 114],[13, 226],[14, 224],[15, 223],[16, 227],[17, 228],[19, 223],[20, 222],[21, 223],[22, 221],[23, 223],[24, 222],[25, 224],[26, 223],[27, 226]]) as Theme

export const dark_gold_active_SliderThumb = n649 as Theme
export const dark_gold_active_Tooltip = n649 as Theme
export const dark_gold_active_ProgressIndicator = n649 as Theme
const n650 = t([[12, 223],[13, 224],[14, 226],[15, 114],[16, 222],[17, 221],[19, 114],[20, 227],[21, 114],[22, 228],[23, 227],[24, 228],[25, 114],[26, 227],[27, 224]]) as Theme

export const dark_gold_active_Input = n650 as Theme
export const dark_gold_active_TextArea = n650 as Theme