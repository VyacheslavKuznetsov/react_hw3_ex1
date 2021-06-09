import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import Stomatology from './Stomatology';
import Science from './Science';
import Art from './Art';

const { Option } = Select;

const STOMATOLOGY = 0;
const SCIENCE = 1;
const ART = 2;

const data = [
    {
        domain: 'Стоматология',
        serviceType: STOMATOLOGY,
        details: [
            {
                key: 'Кариес',
                service: "Кариес",
                price:  3000
            },
            {
                key: 'Удаление зуба простое',
                service: "Удаление зуба простое",
                price:  1500
            },
            {
                key: 'Зубные импланты',
                service: "Зубные импланты",
                price:  10000
            },
            {
                key: 'Восстановление челюсти из запчастей',
                service: "Восстановление челюсти из запчастей",
                price:  150000
            }
        ]
    },
    {
        domain: 'Наука',
        serviceType: SCIENCE,
        details: [
            {
                key: 'Доказательство теоремы Перельмана',
                discipline: "Математика",
                article: "Доказательство теоремы Перельмана",
                impact:  8.0
            },
            {
                key: 'Открытие темной материи',
                discipline: "Физика",
                article: "Открытие темной материи",
                impact:  3.5
            },
            {
                key: 'О вечном двигателе',
                discipline: "Физика",
                article: "О вечном двигателе",
                impact:  0.8
            },
            {
                key: 'Астрономия',
                discipline: "Астрономия",
                article: "Открытие новой планеты",
                impact:  4.2
            }
        ]
    },
    {
        domain: 'Искусство',
        serviceType: ART,
        details: [
            {
                author: "Леонардо да Винчи",
                name: "Мона Лиза",
                url: "https://fanatfoot.ru/Mona%20Lisa.jpg"
            },
            {
                author: "Рафаэль Санти",
                name: "Сикстинская Мадонна",
                url: "https://fanatfoot.ru/Rafael%20Santi%20Sicstinskaya%20Madonna.jpg"
            },
            {
                author: "Ян Вермеер",
                name: "Девушка с серьгой",
                url: "https://fanatfoot.ru/Jan%20Vermeer%20Deveshka%20s%20sergoy.jpg"
            },
            {
                author: "Иван Айвазовский",
                name: "Девятый вал",
                url: "https://fanatfoot.ru/Ayvazovsky%20Devatiy%20val.jpg"
            }
        ]
    }
];

export default class CondRender extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            idx: 0
        }
    }

    handleChange = (e) => {
        this.setState({ idx: e })
    }

    render() {
        return (
            <Fragment>
                <Select defaultValue={0} style={{ width: 220 }} onChange={this.handleChange}>
                    { data.map((item, idx) => (
                        <Option value={idx} key={idx}>{item.domain}</Option>
                    ))}
                </Select>
                { this.state.idx === STOMATOLOGY && <Stomatology datasource={data[this.state.idx].details} /> }
                { this.state.idx === SCIENCE && <Science datasource={data[this.state.idx].details} /> }
                { this.state.idx === ART && <Art datasource={data[this.state.idx].details} /> }
            </Fragment>
        );
    }
}