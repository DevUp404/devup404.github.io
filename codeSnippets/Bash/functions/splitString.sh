#!/bin/bash

# First parameter is the path to split and second the char delimiter.
# Split a string, generally a path, from the start between every delimiter until the last character.
# Usage: splitPath "./dir1/dir2/dir3/dir4/file.fmt" "/"
function splitPath {
    if [[ -z $1 || -z $2 ]]; then
        return 1
    fi
    
    local PATH=$1
    local DELIMITER=$2
    
    declare -a directories
    
    if [[ ${PATH:0:1} = $DELIMITER ]]; then
        local initialIndex=1
    else
        local initialIndex=0
    fi
    
    for (( i=1; i<${#PATH}; i++ )); do
        local currentChar=${PATH:i:1}
        
        if [ $currentChar = $DELIMITER ]; then
            local tokenLength=$(( $i - $initialIndex ))
            directories+=( ${PATH:$initialIndex:$tokenLength} )
            local initialIndex=$(( $i + 1 ))
        fi
    done
    
    tokenLength=$(( ${#PATH} - $initialIndex ))
    directories+=( ${PATH:$initialIndex:$tokenLength} )
    echo ${directories[@]}
    
    return
}    # END OF @splitPath
