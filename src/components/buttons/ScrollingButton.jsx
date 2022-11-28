import styled from 'styled-components'
import colors from './../../utils/styles/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: ${colors.fourth};
    font-size: 20px;
    cursor: pointer;
`


function ScrollingButton({openedCategories, setOpenedCategories, category}) {
    const [isHover, setHover] = useState(false)
    const [isOpen, setOpen] = useState(false)

    const toggleOpen = (categoryId) => {
        const copy = [...openedCategories]
        const category = copy.indexOf(categoryId)
        if (category > -1) {
            copy.splice(category, 1)
            setOpenedCategories(copy);
        } else {
            setOpenedCategories([...copy, categoryId])
        }
    }
 
    return (
        <ButtonContainer
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {toggleOpen(category); setOpen(!isOpen)}}>
            {isHover ? (
                isOpen ? (
                    <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                    <FontAwesomeIcon icon={faAnglesDown} />
                )
            ):(
                isOpen ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                )
            )}    
        </ButtonContainer>
    )
}

export default ScrollingButton