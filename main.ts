/**
 * 
 */
//% weight=100 color=#0fbc11 icon="\uf1ec"
namespace ledcentral {
    //% block
    export function Encender() : void{
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
        return ;
    }
}
