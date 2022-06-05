import { store } from "./store";

interface Localization {
    [path: string]: {
        [text: string]: {
            [language: string]: string | any;
        };
    };
}

interface HTMLAddon {
    tagName: string;
    [key: string]: string;
}

const localization: Localization = {
    '/': {
        'page header': {
            en: 'Home',
            ru: 'Домашняя',
        },
        'change language': {
            en: 'Change language',
            ru: 'Поменять язык',
        },
        'home text header': {
            en: `Hi! My name is Dmitrii Kupriunin, I'm a frontend developer,
                and this is my pet project that actually shows how I write code. It also tells about me a bit.`,
            ru: `Привет! Меня зовут Дмитрий Купрюнин. Я фронтенд разработчик,
                и это мой pet-проект, который показывает как я пишу код, и еще немного рассказывает обо мне.`,
        },
        'home page h4': {
            en: 'A short story about me',
            ru: 'Небольшая история обо мне',
        },
        'home page main text 1': {
            en: `I was born and grown up in Sochi (we had Olympics in 2014).
                Graduated from Sochi Art and Music College as a jazz-saxophone player.
                I moved to Beijing, China in September, 2016. I was studing Mandarin language at
                Chinese University of Mining and Technology . After two years in China
                I moved to Sihanoukville, Cambodia for a half of a year. I started learning web-development
                while living there.`,
            ru: `Я родился и вырос в Сочи. Закончил Сочинский Колледж Искусств как джазовый саксофонист.
                В сенятбре 2016 года я переехал в Пекин, Китай. Там я учил китайский язык в Китайском университете
                Горного дела и Технологий. После двух лет в Китае, я переехал в Сиануквиль, Камбоджу на полгода.
                Там я начал учиться веб-разработке.`,
        },
        'home page main text 2': {
            en: [`When I came back I started taking tasks on freelance platforms and my experienced
                friends were reviewing my code. This is how I got my first commercial experience in web-developemnt.
                A year and a half later, I got a job at `,
                { tagName: 'a', href: 'https://lanit.ru', innerText: 'Lanit' },
                `.
                I was working there for another year and a half (October 2020 - May 2022), and I really liked it, but then
                24th of February, 2022 happended, I escaped from the country, and I couldn't keep paying taxes in russia,
                so I decided to quit, and propose myself to an international market. If you read this article,
                that probably means that I'm looking for a new job :)`],
            ru: [`Когда я вернулся, я начал брать задачи на фриланс-площадках, и мои опытные друзья проводили code-review.
                Так у меня появился первый коммерческий опыт разработки. Через полтора года я устроился в `,
                {tagName: 'a', href: 'https://lanit.ru', innerText: 'Ланит' },
                `.
                Там я проработал еще полтора года (Октябрь 2020 - Май 2022), и мне все нравилось,
                однако случилось 24 февраля 2022, я уехал, и я не мог продолжать платить налоги в россии, решил уволиться,
                и продвигать себя на международном рынке. Если Вы сейчас читаете этот текст,
                значит я наверняка ищу новую работу :)`
                ],
        },
        'home page main text 3': {
            en: `Wonder how did I get from music to web-dev? Music is maths too, exept for apart of thinking,
                you also have to connect it to your hearing and figers (and much more things).
                I'm actually thinking of starting a project, that's going to be about
                "How you connect your musical background to IT", but I'm still thinking about its format.`,
            ru: `Интересно как я из музыки пришел в веб разработку? Музыка - тоже математика, только тут ко всему еще добавляется
                слух и пальцы (и еще много чего, честно говоря). На самом деле, я думаю запустить проект
                "Как связать свой музыкальный бекграунд с IT", но я пока еще думаю о формате этого проекта.`,
        },
        'home page main text 4': {
            en: [`You most likely got here by the link I left on my CV, but if somehow that wasn't the case,
                here's a `,
                { tagName: 'a', href: '/CV.pdf', innerText: 'link to download my CV' },
                ],
            ru: [`Скорее всего попали сюда по ссылке, которую я оставил в своем резюме, но если это не так, то `,
                { tagName: 'a', href: '/CV.pdf', innerText: 'вот ссылка чтобы его скачать' },
                ],
        },
        'rights': {
            en: 'None of rights are reserved',
            ru: 'Никакие права не защищены',
        },
    },
    '/useMemo': {
        'page header': {
            en: 'useMemo example',
            ru: 'Пример useMemo',
        },
        'useMemo example': {
            en: 'useMemo example',
            ru: 'Пример useMemo',
        },
        'useMemo text header': {
            en: 'What is useMemo hook?',
            ru: 'Что за хук useMemo?',
        },
        'useMemo defenition': {
            en: `The useMemo hook accepts a function and a list of dependencies and it returns the memoized value
                returned by the passed function. It recalculated the value only when one of its dependencies change.
                It is useful to avoid expensive calculations on every render when the returned value is not going to change.`,
            ru: `Хук useMemo принимает в качестве аргумента функцию-коллбек и массив зависимостей.
                Возвращает мемоизированное значение из этого коллбека. Хук пересчитывает значение только когда одна из
                зависимостей изменяет свое значение. Это применимо для избежания "дорогих" вычислений на каждый рендер
                когда возвращаемое значение не собирается изменяться.`,
        },
        'useMemo action example': {
            en: 'How does it work in action:',
            ru: 'Как это работает в действии:',
        }
    },
    '/useCallback': {
        'page header': {
            en: 'useCallback example',
            ru: 'Пример useCallback',
        },
        'useCallback example': {
            en: 'useCallback example',
            ru: 'Пример useCallback',
        },
        'useCallback text header': {
            en: 'What is useCallback then?',
            ru: 'Тогда что такое useCallback?',
        },
        'useCallback defenition': {
            en: `The useCallback is a React hook that returns a memoized callback when passed a function and a
                list of dependencies as parameters. It’s very useful when a component is passing a callback to its
                child component to prevent the rendering of the child component. It only changes the callback
                when one of its dependencies gets changed.`,
            ru: `useCallback это React-hook, который возвращает мемоизированный коллбек, когда передаешь в него
                коллбек-функцию и массив зависимостей в качестве аргументов. Это очень полезно когда компонент
                передает коллбек в свой дочерний компонент для того, чтобы дочерний компонент не перерендеривался.
                useCallback изменяет сам коллбек только когда изменяются зависимости, переданные в массиве вторым параметром`,
        },
        'useCallback action example': {
            en: 'How does it work in action:',
            ru: 'Как это работает в действии:',
        },
        'parent': {
            en: 'This is parent component',
            ru: 'Это родительский компонент',
        },
        'child': {
            en: 'This is child component',
            ru: 'Это дочерний компонент',
        },
    },
};

export const localize = (path: string, text: string) => {
    const lang = store.getState().locale.lang;
    const localizedText = localization[path]?.[text]?.[lang];

    if (!localizedText) {
        console.warn(`No localization for '${text}' (path: '${path}') is provided at 'src/localization.ts'`);
    }

    if (Array.isArray(localizedText)) {
        return addHTMLTags(localizedText);
    }

    return localizedText || text;
}

const addHTMLTags = (text: any[]) => {
    return text.map((el: string | HTMLAddon, i) => {
        if (typeof el !== 'string') {
            switch (el.tagName) {
                case 'a':
                    return <a key={i} href={el.href} target="_blank" rel="noreferrer">{el.innerText}</a>;
            
                default:
                    return null;
            }
            
        }

        return <span key={i}>{el}</span>;
    });
};