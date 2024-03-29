import {Box, type BoxProps, type Key, Text, useInput} from 'ink';
import _ from 'lodash';
import {useEffect, useRef, useState} from 'react';

import * as colors from '../colors.js';
import * as icons from '../icons.js';
import {rotate} from '../internals.js';
import {type SelectInputItem} from './SelectInputItem.js';

/**
 * {@linkcode SelectInput} component props.
 */
type SelectInputProps = BoxProps & {
  /** Text to display as a label. */
  label: string;

  /** Items to display in a list. */
  items: SelectInputItem[];

  /** Should component listen to user's input? Useful in case there are multiple input components at the same time and input must be handled only by a specific component. */
  focus?: boolean | undefined;

  /** Index of initially selected item. */
  initialIndex?: number | undefined;

  /** Number of items to display. */
  limit?: number | undefined;

  /** Handler function that is called when item is selected. */
  onSelect?: ((item: SelectInputItem) => void) | undefined;

  /** Handler function that is called when item is highlighted. */
  onHighlight?: ((item: SelectInputItem) => void) | undefined;

  /** Indicates whether value has been accepted. Component then doesn't accept more input. */
  isComplete?: boolean | undefined;
};

/**
 * Select input component.
 */
export function SelectInput({
  label,
  items,
  focus = true,
  initialIndex = 0,
  limit: userDefinedLimit,
  onSelect,
  onHighlight,
  isComplete,
  ...boxProps
}: SelectInputProps): JSX.Element {
  let [rotatedIndex, setRotatedIndex] = useState(0);
  let [selectedIndex, setSelectedIndex] = useState(initialIndex);
  let hasLimit = typeof userDefinedLimit === 'number' && items.length > userDefinedLimit;
  let limit = hasLimit ? Math.min(userDefinedLimit as number, items.length) : items.length;
  let previousItems = useRef<SelectInputItem[]>(items);

  useEffect(() => {
    if (
      !_.isEqual(
        previousItems.current.map((item) => item.value),
        items.map((item) => item.value),
      )
    ) {
      setRotatedIndex(0);
      setSelectedIndex(0);
    }

    previousItems.current = items;
  }, [items]);

  useInput(
    (input: string, key: Key) => {
      if (input === 'k' || key.upArrow) {
        let lastIndex = (hasLimit ? limit : items.length) - 1;
        let isAtFirstIndex = selectedIndex === 0;
        let nextIndex = hasLimit ? selectedIndex : lastIndex;
        let nextRotatedIndex = isAtFirstIndex ? rotatedIndex + 1 : rotatedIndex;
        let nextSelectedIndex = isAtFirstIndex ? nextIndex : selectedIndex - 1;

        setRotatedIndex(nextRotatedIndex);
        setSelectedIndex(nextSelectedIndex);

        let slicedItems = hasLimit ? rotate(items, nextRotatedIndex).slice(0, limit) : items;

        if (typeof onHighlight === 'function') {
          onHighlight(slicedItems[nextSelectedIndex] as SelectInputItem);
        }
      }

      if (input === 'j' || key.downArrow) {
        let isAtLastIndex = selectedIndex === (hasLimit ? limit : items.length) - 1;
        let nextIndex = hasLimit ? selectedIndex : 0;
        let nextRotatedIndex = isAtLastIndex ? rotatedIndex - 1 : rotatedIndex;
        let nextSelectedIndex = isAtLastIndex ? nextIndex : selectedIndex + 1;

        setRotatedIndex(nextRotatedIndex);
        setSelectedIndex(nextSelectedIndex);

        let slicedItems = hasLimit ? rotate(items, nextRotatedIndex).slice(0, limit) : items;

        if (typeof onHighlight === 'function') {
          onHighlight(slicedItems[nextSelectedIndex] as SelectInputItem);
        }
      }

      if (key.return) {
        let slicedItems = hasLimit ? rotate(items, rotatedIndex).slice(0, limit) : items;

        if (typeof onSelect === 'function') {
          onSelect(slicedItems[selectedIndex] as SelectInputItem);
        }
      }
    },
    {isActive: focus},
  );

  let visibleItems: SelectInputItem[] =
    hasLimit ? rotate(items, rotatedIndex).slice(0, limit) : items;

  return (
    <Box {...boxProps}>
      <Box marginRight={1}>
        <Text>{isComplete ? icons.success : icons.question}</Text>
      </Box>

      <Box flexDirection="column">
        <Box marginRight={1}>
          <Text color={colors.highlighted}>{label}</Text>
        </Box>
        {isComplete ?
          <Text color={colors.body}>
            {items[selectedIndex]?.label ?? String(items[selectedIndex]?.value)}
          </Text>
        : <Box flexDirection="column">
            {visibleItems.map((item, index) => {
              let isSelected = index === selectedIndex;

              return (
                <Box key={item.value}>
                  <Box marginRight={1}>
                    {isSelected ?
                      <Text color={colors.selected}>{icons.selectedCircle}</Text>
                    : <Text color={colors.unselected}>{icons.unselectedCircle}</Text>}
                  </Box>
                  <Text color={isSelected ? colors.highlighted : colors.muted}>{item.label}</Text>
                </Box>
              );
            })}
          </Box>
        }
      </Box>
    </Box>
  );
}

// partially based on https://github.com/vadimdemedes/ink-select-input/tree/309497ca641f55d8df0083ec2d07264f101358e4 (see https://github.com/vadimdemedes/ink-select-input/blob/309497ca641f55d8df0083ec2d07264f101358e4/license for license)
