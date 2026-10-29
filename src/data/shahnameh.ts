export type VerseId = 'shepherds' | 'spared' | 'mercy' | 'justice'

export const verses: Record<VerseId, { url: string; couplets: [string, string][] }> = {
  shepherds: {
    url: 'https://ganjoor.net/ferdousi/shahname/siavosh/sh13',
    couplets: [
      ['مداریدش اندر میان گروه', 'به نزد شبانان فرستش به کوه'],
      ['که تاج سر شهریاران توی', 'که گوید که پور شبانان توی'],
    ],
  },
  spared: {
    url: 'https://ganjoor.net/ferdousi/shahname/mahmood/sh15',
    couplets: [
      ['کز این پس شما را ز من بیم نیست', 'مرا بی‌وفایی و دژخیم نیست'],
      ['نه مردی بود خیره آشوفتن', 'به زیر اندر آورده را کوفتن'],
    ],
  },
  mercy: {
    url: 'https://ganjoor.net/ferdousi/shahname/mahmood/sh15',
    couplets: [
      ['بدیشان چنین گفت کایمن شوید', 'ز گوینده گفتار بد مشنوید'],
      ['ز خون ریختن دل بباید کشید', 'سر بیگناهان نباید برید'],
    ],
  },
  justice: {
    url: 'https://ganjoor.net/ferdousi/shahname/kkhosro/sh1',
    couplets: [
      ['به هر جای ویرانی آباد کرد', 'دل غمگنان از غم آزاد کرد'],
      ['جهان شد پر از خوبی و ایمنی', 'ز بد بسته شد دست اهریمنی'],
    ],
  },
}
