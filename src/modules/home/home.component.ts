import { HomeController } from './home.controller';

export class HomeComponent implements ng.IComponentOptions {
    public template = `
    <div layout-gt-md="row" layout-wrap>
        <div flex-gt-md="30">
            <mhn-card header="Wo findet Ihr mich?" map-config="::home.location" map-marker="::home.marker">
                Falkensteiner Weg 10<br /> 65843 Sulzbach
            </mhn-card>
        </div>
        <div flex-gt-md="55" flex-order-gt-md="-1">
            <mhn-card header="Meine Arbeit in Sulzbach">
                In meinem Nagelstudio in Sulzbach kümmere ich mich engagiert und mit großer Liebe zum Beruf darum, meinen Kundinnen zu einem
                gepflegten Aussehen zu verhelfen. <br /><br /> Unsere Hände sind fast immer sichtbar und stehen vielfach
                im Zentrum des Interesses. Nicht umsonst gibt es die Redewendung "jemandem auf die Finger sehen". Ob beim Essen,
                beim gestenreichen Sprechen oder einfach in legerer Haltung, unsere Hände sind sichtbar und ziehen viele Blicke
                auf sich.
                <br /><br /> Maniküre und Nageldesign sind weit mehr als ausschließlich künstliche Fingernägel. Eine Basispflege
                ist bei mir ebenso denkbar wie aufwendig gestylte Nägel – ganz nach Wunsch.<br /><br /> Wenn Sie der Meinung
                sind, dass künstliche Fingernägel gleichzusetzen sind mit unnatürlich langen Krallen, wie sie vor Jahrzehnten
                modern waren, lassen Sie sich vom Gegenteil überzeugen. Ich zeige Ihnen gerne, wie wunderbar natürlich zeitgemäßes
                Nageldesign aussieht.
            </mhn-card>
            <mhn-card header="Nageldesign – ein kleiner Rückblick">
                Gerade in der heutigen Zeit ist gutes und vor allem gepflegtes Aussehen wichtig – beruflich wie privat.<br /><br
                /> Aber auch in der Antike kümmerten sich die Menschen bereits sorgfältig um ihre Nägel. Cleopatra etwa, Inbegriff
                der Schönheit, modellierte ihre Fingernägel mit Porzellanpulver und färbte sie anschließend golden oder mit Henna
                orangerot. In der Ming-Dynastie wussten die Menschen ebenfalls ihre Nägel zu verstärken.<br /><br /> Im 20. Jahrhundert
                begann der Siegeszug der künstlichen Fingernägel, die bald auch für jeden populär wurden. Gestaltung und Materialien
                waren und sind dabei der jeweiligen Mode und dem individuellen Geschmack unterworfen.<br /><br /> In angenehmen
                und wohltuenden Ambiente sorge ich dafür, dass Sie stolz auf Ihre Hände sein können.
            </mhn-card>
            <mhn-card header="Künstliche Fingernägel – viele Varianten möglich">
                Ob Sie schlicht geformte oder auffällig gefeilte Fingernägel wünschen, ob dezent lackiert, üppig mit Steinchen verziert oder
                aufwendig gemustert – in allen Techniken verfüge ich über viel Erfahrung.<br /> Gerne berate ich
                Sie bei der Auswahl der Lacke und Farben wie auch bei der Form Ihrer Fingernägel.<br /><br /> Dabei spielt selbstverständlich
                der Anlass eine große Rolle. Ein festlicher Abend gestattet ein pompöses Design, farblich passend zu Ihrem Kleid.
                Für den Alltag empfiehlt sich eher ein schlichter Look.<br/><br/> Wesentlich bei allem ist jedoch, dass Sie selbst
                sich wohlfühlen und gerne Ihre gepflegten Hände und schönen Fingernägel zeigen.
            </mhn-card>
        </div>
    </div>`;
    public controller = HomeController;
    public controllerAs = 'home';
}